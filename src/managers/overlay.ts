import { v4 } from "uuid";
import { Packet } from "../packet";
import { Command, OpCode } from "../types";
import { BaseManager } from "./base";

export class OverlayManager extends BaseManager {
  /** Opens Guild Invite modal in app of given Invite Code */
  openGuildInvite(code: string) {
    const nonce = v4();

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.OpenOverlayGuildInvite,
        args: {
          code,
          pid: process.pid,
        },
        nonce,
      })
    );

    return this;
  }

  /** Opens Voice Settings Modal in app */
  openVoiceSettings() {
    const nonce = v4();

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.OpenOverlayVoiceSettings,
        args: {
          pid: process.pid,
        },
        nonce,
      })
    );

    return this;
  }
}
