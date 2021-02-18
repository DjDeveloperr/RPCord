import EventEmitter from "events";
import type { RPClient } from "../client";

export class BaseManager extends EventEmitter {
  client: RPClient;

  get ipc() {
    return this.client.ipc;
  }

  constructor(client: RPClient) {
    super();
    this.client = client;
  }
}
