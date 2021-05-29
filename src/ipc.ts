import { Socket, connect } from "net";
import { getIPCPath } from "./util";
import { EventEmitter } from "events";
import { Packet } from "./packet";
import { v4 } from "uuid";

export async function findIPC(id = 0): Promise<Socket> {
  return new Promise((res, rej) => {
    let socket: Socket;
    if (id > 9) return rej(new Error("Failed to find Discord IPC"));
    socket = connect(getIPCPath(id));

    socket.once("connect", () => {
      socket.removeAllListeners("connect");
      socket.removeAllListeners("error");
      res(socket);
    });

    socket.once("error", () => {
      res(findIPC(id + 1));
    });
  });
}

export class DiscordIPC extends EventEmitter {
  socket?: Socket;

  async connect() {
    this.socket = await findIPC();
    this.emit("connect");

    this.socket.on("data", (buffer) => {
      const packet = Packet.tryParse(buffer);
      if (packet) {
        this.emit("packet", packet);
      }
    });

    this.socket.on("close", () => this.emit("close"));
  }

  send(packet: Packet): string {
    if (!packet.data.nonce) packet.data.nonce = v4();
    this.socket?.write(packet.encode());
    return packet.data.nonce;
  }

  close() {
    this.socket?.end();
    this.socket = undefined;
  }
}
