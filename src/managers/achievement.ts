import { v4 } from "uuid";
import { Packet } from "../packet";
import { Command, OpCode } from "../types";
import { BaseManager } from "./base";

export class AchievementManager extends BaseManager {
  /** Returns an array of User's Achievements */
  async getAll(timeout: number = 5000): Promise<any[]> {
    const nonce = v4();

    const wait = this.client
      .waitFor("getUserAchievements", (_, n) => n === nonce, timeout)
      .then((d) => d[0]);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.GetUserAchievements,
        nonce,
      })
    );

    return wait;
  }

  /** Sets User's Achievement progress (percent) by ID */
  async set(
    id: string,
    percent: number,
    timeout: number = 5000
  ): Promise<AchievementManager> {
    const nonce = v4();

    const wait = this.client
      .waitFor("setUserAchievement", (_, n) => n === nonce, timeout)
      .then(() => this);

    this.ipc.send(
      new Packet(OpCode.Frame, {
        cmd: Command.SetUserAchievement,
        args: {
          achievement_id: id,
          percent_complete: percent,
        },
        nonce,
      })
    );

    return wait;
  }
}
