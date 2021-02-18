import { v4 } from "uuid";
import { Packet } from "../packet";
import { Command, Lobby, LobbyMetadata, LobbyOptions, OpCode } from "../types";
import { BaseManager } from "./base";

export class LobbyManager extends BaseManager {
  /** Create a new Lobby with given options */
  async create(data: LobbyOptions, timeout = 5000): Promise<Lobby> {
    const nonce = v4();

    const wait = this.client
      .waitFor("createLobby", (_, n) => n == nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.CreateLobby,
        args: data ?? {},
        nonce,
      })
    );

    return wait;
  }

  /** Search for lobbies */
  async search(timeout = 5000): Promise<Lobby[]> {
    const nonce = v4();

    const wait = this.client
      .waitFor("searchLobbies", (_, n) => n == nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SearchLobbies,
        args: {},
        nonce,
      })
    );

    return wait;
  }

  /** Update a Lobby with given options */
  async update(
    id: string,
    options: LobbyOptions,
    timeout = 5000
  ): Promise<LobbyManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("updateLobby", (_, n) => n == nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.UpdateLobby,
        args: Object.assign({ id }, options || {}),
        nonce,
      })
    );

    return wait;
  }

  /** Delete a Lobby */
  async delete(id: string, timeout = 5000): Promise<LobbyManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("deleteLobby", (_, n) => n == nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.DeleteLobby,
        args: { id },
        nonce,
      })
    );

    return wait;
  }

  /** Connect to a Lobby */
  async connect(id: string, secret: string, timeout = 5000): Promise<Lobby> {
    const nonce = v4();

    const wait = this.client
      .waitFor("connectToLobby", (_, n) => n == nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.ConnectToLobby,
        args: { id, secret },
        nonce,
      })
    );

    return wait;
  }

  /** Disconnect from a Lobby */
  async disconnect(id: string, timeout = 5000): Promise<Lobby> {
    const nonce = v4();

    const wait = this.client
      .waitFor("disconnectFromLobby", (_, n) => n == nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.DisconnectFromLobby,
        args: { id },
        nonce,
      })
    );

    return wait;
  }

  /** Connect to a Lobby Voice */
  async connectVoice(id: string, timeout = 5000): Promise<LobbyManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("connectToLobbyVoice", (_, n) => n == nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.ConnectToLobbyVoice,
        args: { id },
        nonce,
      })
    );

    return wait;
  }

  /** Disconnect from a Lobby Voice */
  async disconnectVoice(id: string, timeout = 5000): Promise<LobbyManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("disconnectFromLobbyVoice", (_, n) => n == nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.DisconnectFromLobbyVoice,
        args: { id },
        nonce,
      })
    );

    return wait;
  }

  async updateMember(
    id: string,
    userID: string,
    metadata: LobbyMetadata,
    timeout = 5000
  ): Promise<LobbyManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("updateLobbyMember", (_, n) => n == nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.UpdateLobbyMember,
        args: {
          lobby_id: id,
          user_id: userID,
          metadata,
        },
        nonce,
      })
    );

    return wait;
  }
}
