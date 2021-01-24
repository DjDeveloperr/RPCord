import { EventEmitter } from "events";
import { DiscordIPC } from "./ipc";
import { Packet } from "./packet";
import {
  Application,
  ChannelPayload,
  ClientConfig,
  Command,
  Device,
  Guild,
  OpCode,
  PartialChannel,
  PartialGuild,
  RPCEvent,
  ShortcutKeyCombo,
  User,
  UserVoiceSettings,
  VoiceSettings,
} from "./types";
import fetch from "node-fetch";
import { Presence } from "./presence";

/** Client options to initialize. */
export interface RPClientOptions {
  secret?: string;
  scopes?: string[];
}

/** High-level wrapper over Discord IPC. */
export class RPClient extends EventEmitter {
  /** Client ID */
  id: string;
  /** Discord RPC Version */
  v: number = 1;
  /** Internal IPC */
  ipc: DiscordIPC;
  /** Whether Client is Authorized yet or not */
  authorized: boolean = false;
  /** Whether Client is Authenticated yet or not */
  authenticated: boolean = false;
  /** Auth Code saved from `authorize` */
  authCode?: string;
  /** Access Token saved from `authenticate` */
  accessToken?: string;
  /** Scopes to use for Authorization */
  scopes?: string[];
  /** Client Secret (for fetching Access Token from Auth Code) */
  secret?: string;
  /** Underlying User account of the Discord Client */
  user?: User;
  /** RPC Client Config (Discord) */
  config?: ClientConfig;
  /** User's cached Voice Settings */
  userVoiceSettings?: UserVoiceSettings;
  /** Expiration of Access Token */
  expires?: number;
  /** Application object of the Client */
  application?: Application;

  constructor(id: string, options?: RPClientOptions) {
    super();
    this.id = id;
    if (options) {
      this.secret = options.secret;
      this.scopes = options.scopes;
    }

    this.ipc = new DiscordIPC();
    this.ipc.on("packet", (packet: Packet) => this.processPacket(packet));
  }

  private processPacket(packet: Packet) {
    if (packet.op == OpCode.Close) {
      throw new Error(
        `Discord IPC Closed (${packet.data.code}): ${packet.data.message}`
      );
    }

    switch (packet.op) {
      case OpCode.Frame:
        const cmd = packet.data.cmd as Command;
        const data = packet.data.data;
        const nonce = packet.data.nonce;

        if (packet.data.evt && packet.data.evt == "ERROR") {
          this.emit("error", data);
        } else {
          switch (cmd) {
            case Command.Dispatch:
              this.processEvent(packet.data.evt, data);
              break;

            case Command.Authorize:
              this.authorized = true;
              this.authCode = data.code;
              this.emit("authorize", data.code);
              this.fetchAccessToken();
              break;

            case Command.Authenticate:
              this.authenticated = true;
              this.user = data.user;
              this.scopes = data.scopes;
              this.expires = data.expires;
              this.application = data.application;
              this.emit("authenticate");
              break;

            case Command.Subscribe:
              this.emit("subscribe", data.evt, nonce);
              break;

            case Command.Unsubscribe:
              this.emit("unsubscribe", data.evt, nonce);
              break;

            case Command.SetActivity:
              this.emit("setActivity", data, nonce);
              break;

            case Command.GetGuild:
              this.emit("getGuild", data, nonce);
              break;

            case Command.GetGuilds:
              this.emit("getGuilds", data.guilds, nonce);
              break;

            case Command.GetChannel:
              this.emit("getChannel", data, nonce);
              break;

            case Command.GetChannels:
              this.emit("getChannels", data.channels, nonce);
              break;

            case Command.SetUserVoiceSettings:
              this.userVoiceSettings = data;
              this.emit("setUserVoiceSettings", data, nonce);
              break;

            case Command.SelectVoiceChannel:
              this.emit("selectVoiceChannel", data, nonce);
              break;

            case Command.GetSelectedVoiceChannel:
              this.emit("getSelectedVoiceChannel", data, nonce);
              break;

            case Command.SelectTextChannel:
              this.emit("selectTextChannel", data, nonce);
              break;

            case Command.GetVoiceSettings:
              this.emit("getVoiceSettings", data, nonce);
              break;

            case Command.SetVoiceSettings:
              this.emit("setVoiceSettings", data, nonce);
              break;

            case Command.CaptureShortcut:
              this.emit("captureShortcut", data.shortcut, nonce);
              break;

            case Command.SetCertifiedDevices:
              this.emit("setCertifiedDevices", nonce);
              break;

            default:
              break;
          }
        }
        break;

      case OpCode.Ping:
        this.ipc.send(new Packet(OpCode.Pong, packet.data));
        break;

      default:
        break;
    }
  }

  private processEvent(evt: RPCEvent, data: any) {
    this.emit("raw", evt, data);

    switch (evt) {
      case RPCEvent.Ready:
        this.user = data.user;
        this.config = data.config;
        this.emit("ready");
        break;

      default:
        const event = evt
          .split("_")
          .map((e, i) =>
            i == 0
              ? e.toLowerCase()
              : `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`
          )
          .join("");

        this.emit(event, data);
        break;
    }
  }

  /** Subscribe for an RPC Event. */
  async subscribe(evt: RPCEvent, args?: any) {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.Subscribe,
        args: args ?? {},
        evt,
      })
    );

    return this.waitFor("subscribe", (_, n) => n == nonce, 10000).then(
      () => this
    );
  }

  /** Unsubscribe from an RPC Event. */
  async unsubscribe(evt: RPCEvent, args?: any) {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.Unsubscribe,
        args: args ?? {},
        evt,
      })
    );

    return this.waitFor("unsubscribe", (_, n) => n == nonce, 10000).then(
      () => this
    );
  }

  /** Connect to Discord IPC. */
  async connect() {
    await this.ipc.connect();
    this.ipc.send(
      new Packet(OpCode.Handshake, {
        v: 1,
        client_id: this.id,
      })
    );
    return this.waitFor("ready").then(() => this);
  }

  /** Authorize for given scopes (or scopes in Client Options). */
  async authorize(scopes?: string[]) {
    if (this.authorized || this.authenticated)
      throw new Error("Already authorized");

    if (scopes) this.scopes = scopes;
    if (!this.scopes) this.scopes = ["rpc"];

    if (!this.scopes.includes("rpc")) this.scopes.push("rpc");

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.Authorize,
        args: {
          client_id: this.id,
          scopes: this.scopes.join(" "),
          grant_type: "authorization_code",
        },
      })
    );

    return this.waitFor("authenticate").then(() => this);
  }

  /** Authenticate using an existing Access Token */
  async authenticate(token?: string) {
    if (this.authenticated) throw new Error("Already Authenticated");

    if (token) this.accessToken = token;
    if (!this.accessToken) throw new Error("Access Token is required");

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.Authenticate,
        args: {
          access_token: this.accessToken,
        },
      })
    );

    return this.waitFor("authenticate").then(() => this);
  }

  /** Fetches Access Token from given Auth Code */
  private async fetchAccessToken(code?: string) {
    if (code) this.authCode = code;
    if (this.accessToken) throw new Error("Access Token already fetched");
    if (!this.authCode) throw new Error("No Auth Code given");

    const form = new URLSearchParams();
    form.set("client_id", this.id);
    form.set("client_secret", this.secret ?? "");
    form.set("scopes", this.scopes?.join(" ") ?? "");
    form.set("grant_type", "authorization_code");
    form.set("code", this.authCode);

    const res = await fetch("https://discord.com/api/v8/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    }).then((r) => r.json());

    this.accessToken = res.access_token;
    this.authenticate();
    return this.accessToken;
  }

  /** Set User's Activity (Presence) */
  async setActivity(activity: Presence): Promise<Presence> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SetActivity,
        args: {
          pid: process.pid,
          activity,
        },
      })
    );

    return this.waitFor("setActivity", (_, n) => n == nonce, 10000).then(
      (act) => new Presence(act[0])
    );
  }

  /** Get a Guild by ID */
  async getGuild(id: string, timeout: number = 5000): Promise<Guild> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetGuild,
        args: {
          guild_id: id,
          timeout: Math.floor(timeout / (1000 * 60)),
        },
      })
    );

    return this.waitFor("getGuild", (_, n) => n === nonce, timeout).then(
      (guild) => guild[0]
    );
  }

  /** Get all Guilds of the User */
  async getGuilds(timeout: number = 5000): Promise<PartialGuild[]> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetGuilds,
        args: {},
      })
    );

    return this.waitFor("getGuilds", (_, n) => n === nonce, timeout).then(
      (guilds) => guilds[0]
    );
  }

  /** Get a Channel by ID */
  async getChannel(
    id: string,
    timeout: number = 5000
  ): Promise<ChannelPayload> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetChannel,
        args: {
          channel_id: id,
        },
      })
    );

    return this.waitFor("getChannel", (_, n) => n === nonce, timeout).then(
      (guild) => guild[0]
    );
  }

  /** Get all Channels of the User */
  async getChannels(
    guild?: string,
    timeout: number = 5000
  ): Promise<PartialChannel[]> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetChannels,
        args: {
          guild_id: guild,
        },
      })
    );

    return this.waitFor("getChannels", (_, n) => n === nonce, timeout).then(
      (channels) => channels[0]
    );
  }

  /** Set User's Voice Settings (only one property at a time or Discord will error) */
  async setUserVoiceSettings(
    settings: UserVoiceSettings,
    timeout = 5000
  ): Promise<UserVoiceSettings> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SetUserVoiceSettings,
        args: settings,
      })
    );

    return this.waitFor(
      "setUserVoiceSettings",
      (_, n) => n === nonce,
      timeout
    ).then((data) => data[0]);
  }

  /** Select a Voice Channel by ID */
  async selectVoiceChannel(
    id: string,
    force?: boolean,
    timeout = 5000
  ): Promise<ChannelPayload> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SelectVoiceChannel,
        args: {
          channel_id: id,
          force,
          timeout: Math.floor(timeout / (1000 * 60)),
        },
      })
    );

    return this.waitFor(
      "selectVoiceChannel",
      (_, n) => n === nonce,
      timeout
    ).then((chan) => chan[0]);
  }

  /** Select a Text Channel by ID */
  async selectTextChannel(id: string, timeout = 5000): Promise<ChannelPayload> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SelectTextChannel,
        args: {
          channel_id: id,
          timeout: Math.floor(timeout / (1000 * 60)),
        },
      })
    );

    return this.waitFor(
      "selectTextChannel",
      (_, n) => n === nonce,
      timeout
    ).then((chan) => chan[0]);
  }

  /** Get selected Voice Channel */
  async getSelectedVoiceChannel(timeout = 5000): Promise<ChannelPayload> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetSelectedVoiceChannel,
        args: {},
      })
    );

    return this.waitFor(
      "getSelectedVoiceChannel",
      (_, n) => n === nonce,
      timeout
    ).then((data) => data[0]);
  }

  /** Get Voice Settins of Client */
  async getVoiceSettings(timeout = 5000): Promise<VoiceSettings> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetVoiceSettings,
        args: {},
      })
    );

    return this.waitFor(
      "getVoiceSettings",
      (_, n) => n === nonce,
      timeout
    ).then((data) => data[0]);
  }

  /** Set Voice Settings of Client. Only one property to update at once supported */
  async setVoiceSettings(
    settings: VoiceSettings,
    timeout = 5000
  ): Promise<VoiceSettings> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SetVoiceSettings,
        args: settings,
      })
    );

    return this.waitFor(
      "setVoiceSettings",
      (_, n) => n === nonce,
      timeout
    ).then((data) => data[0]);
  }

  /** START or STOP capturing shortcut */
  async captureShortcut(
    action: "START" | "STOP",
    timeout = 5000
  ): Promise<ShortcutKeyCombo[]> {
    if (action != "START" && action != "STOP")
      throw new Error("Invalid Action. Must be either START or STOP");
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.CaptureShortcut,
        args: {
          action,
        },
      })
    );

    return this.waitFor("captureShortcut", (_, n) => n === nonce, timeout).then(
      (data) => data[0]
    );
  }

  /** Start capturing shortcut */
  async startCaptureShortcut(timeout = 5000): Promise<ShortcutKeyCombo[]> {
    return this.captureShortcut("START");
  }

  /** Stop capturing shortcut */
  async stopCaptureShortcut(timeout = 5000): Promise<ShortcutKeyCombo[]> {
    return this.captureShortcut("STOP");
  }

  /** Set Certified Devices (Audio/Video) */
  async setCertifiedDevices(
    devices: Device[],
    timeout = 5000
  ): Promise<RPClient> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SetCertifiedDevices,
        args: {
          devices,
        },
      })
    );

    return this.waitFor(
      "setCertifiedDevices",
      (_, n) => n === nonce,
      timeout
    ).then(() => this);
  }

  /** Approve an Activity Join Request (by user ID) */
  sendActivityJoinInvite(id: string) {
    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SendActivityJoinInvite,
        args: {
          user_id: id,
        },
      })
    );
  }

  /** Close (decline) an Activity Join Request */
  closeActivityRequest(id: string) {
    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.CloseActivityRequest,
        args: {
          user_id: id,
        },
      })
    );
  }

  /** Wait for an event to fire */
  async waitFor(
    event: string,
    checkFunction: (...args: any[]) => boolean = () => true,
    timeout?: number
  ): Promise<any[]> {
    return await new Promise((resolve, reject) => {
      let timeoutID: any | undefined;
      if (timeout !== undefined) {
        timeoutID = setTimeout(() => {
          this.off(event, eventFunc);
          reject(new Error("Timed out"));
        }, timeout);
      }
      const eventFunc = (...args: any[]): void => {
        if (checkFunction(...args)) {
          resolve(args);
          this.off(event, eventFunc);
          if (timeoutID !== undefined) clearTimeout(timeoutID);
        }
      };
      this.on(event, eventFunc);
    });
  }
}
