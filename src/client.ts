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

export interface RPClientOptions {
  secret?: string;
  scopes?: string[];
}

export class RPClient extends EventEmitter {
  id: string;
  v: number = 1;
  ipc: DiscordIPC;
  authorized: boolean = false;
  authenticated: boolean = false;
  authCode?: string;
  accessToken?: string;
  scopes?: string[];
  secret?: string;
  user?: User;
  config?: ClientConfig;
  userVoiceSettings?: UserVoiceSettings;
  expires?: number;
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

  async authorize(scopes?: string[]) {
    if (this.authorized) throw new Error("Already authorized");

    if (scopes) this.scopes = scopes;
    if (!this.scopes) this.scopes = ["rpc"];

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

  async fetchAccessToken(code?: string) {
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

  async getGuild(id: string, timeout: number = 5000): Promise<Guild> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetGuild,
        args: {
          guild_id: id,
          timeout,
        },
      })
    );

    return this.waitFor("getGuild", (_, n) => n === nonce, timeout).then(
      (guild) => guild[0]
    );
  }

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

  async getChannels(timeout: number = 5000): Promise<PartialChannel[]> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetChannels,
        args: {},
      })
    );

    return this.waitFor("getChannels", (_, n) => n === nonce, timeout).then(
      (channels) => channels[0]
    );
  }

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
          timeout,
        },
      })
    );

    return this.waitFor(
      "selectVoiceChannel",
      (_, n) => n === nonce,
      timeout
    ).then((chan) => chan[0]);
  }

  async selectTextChannel(id: string, timeout = 5000): Promise<ChannelPayload> {
    const nonce = this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SelectTextChannel,
        args: {
          channel_id: id,
          timeout,
        },
      })
    );

    return this.waitFor(
      "selectTextChannel",
      (_, n) => n === nonce,
      timeout
    ).then((chan) => chan[0]);
  }

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

  async startCaptureShortcut(timeout = 5000): Promise<ShortcutKeyCombo[]> {
    return this.captureShortcut("START");
  }

  async stopCaptureShortcut(timeout = 5000): Promise<ShortcutKeyCombo[]> {
    return this.captureShortcut("STOP");
  }

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
