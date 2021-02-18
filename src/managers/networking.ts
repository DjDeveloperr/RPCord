import { v4 } from "uuid";
import { Packet } from "../packet";
import { Command, NetworkingConfig, OpCode } from "../types";
import { BaseManager } from "./base";

export class NetworkingManager extends BaseManager {
  /** Gets the Networking Config */
  async getConfig(timeout: number = 5000): Promise<NetworkingConfig> {
    const nonce = v4();

    const wait = this.client
      .waitFor("getNetworkingConfig", (_, n) => n === nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetNetworkingConfig,
        nonce,
      })
    );

    return wait;
  }

  /** Gets the Networking System Metrics */
  async systemMetrics(timeout: number = 5000): Promise<any | null> {
    const nonce = v4();

    const wait = this.client
      .waitFor("networkingSystemMetrics", (_, n) => n === nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.NetworkingSystemMetrics,
        nonce,
      })
    );

    return wait;
  }

  /** Gets the Networking Peer Metrics */
  async peerMetrics(timeout: number = 5000): Promise<any | null> {
    const nonce = v4();

    const wait = this.client
      .waitFor("networkingPeerMetrics", (_, n) => n === nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.NetworkingPeerMetrics,
        nonce,
      })
    );

    return wait;
  }

  /** Creates and returns a new Networking Token */
  async createToken(timeout: number = 5000): Promise<string> {
    const nonce = v4();

    const wait = this.client
      .waitFor("networkingCreateToken", (_, n) => n === nonce, timeout)
      .then((d) => d[0].token);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.NetworkingCreateToken,
        nonce,
      })
    );

    return wait;
  }
}
