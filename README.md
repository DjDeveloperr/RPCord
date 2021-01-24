# RPCord

Module to interact with local Discord Client using IPC.

## Features

- All RPC Commands supported.
- Simple interface.
- Made with TypeScript.

## Example

```ts
const rpc = new RPClient("client_id", {
  secret: "client_secret",
  scopes: ["rpc", "messages.read"],
});

rpc.on("ready", () => {
  console.log("Connected!");
});

rpc.on("messageCreate", console.log);

rpc.connect().then(() => {
  rpc.authorize().then(() => {
    rpc.subscribe("MESSAGE_CREATE", { channel_id: "channel_id" });
  });
});
```

## Contributing

You're always welcome to contribute!

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr
