import { OpCode } from "./types";

export class Packet {
  op: OpCode;
  data: any;

  constructor(op: OpCode, data?: any) {
    this.op = op;
    this.data = data ?? {};
  }

  encode() {
    const data = JSON.stringify(this.data);

    const len = Buffer.byteLength(data);
    const buf = Buffer.alloc(8 + len);

    buf.writeInt32LE(this.op, 0);
    buf.writeInt32LE(len, 4);
    buf.write(data, 8);

    return buf;
  }

  static parse(data: string | Uint8Array | Buffer) {
    const buf =
      data instanceof Uint8Array ? Buffer.from(data.buffer) : Buffer.from(data);

    const op = buf.readInt32LE(0);
    const len = buf.readInt32LE(4);
    const json = buf
      .slice(8, len + 8)
      .toString()
      .trim();

    return new Packet(op, JSON.parse(json));
  }

  static tryParse(data: string | Uint8Array | Buffer) {
    try {
      return this.parse(data);
    } catch (e) {
      return;
    }
  }
}
