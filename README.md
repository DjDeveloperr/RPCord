rpcord / [Exports](modules.md)

# RPCord

![[NPM](https://npmjs.org/package/rpcord)](https://img.shields.io/npm/v/rpcord)

Module to interact with local Discord Client using IPC.

## Features

- All RPC Commands supported.
- Simple interface.
- Made with TypeScript.

## Docs

Read the docs [here](https://github.com/DjDeveloperr/RPCord/blob/gh-pages/modules.md).

## Installation

You can install from [NPM](https://npmjs.org/package/rpcord).

```
npm i rpcord
```

## Example

```ts
const { RPClient, Presence } = require("rpcord");

const rpc = new RPClient("803507787497865226");

rpc.on("ready", () => {
  console.log("Connected!");
});

rpc.connect().then(() => {
  rpc.setActivity(
    new Presence()
      .setLargeImage("discord")
      .setDetails("Nothing")
      .setState("Idling")
      .setStartTimestamp(Date.now())
      .setPartyID("12345")
      .setPartySize(1, 2)
      .addButton({
        label: "RPCord Repo",
        url: "https://github.com/DjDeveloperr/RPCord",
      })
      .addButton({
        label: "RPCord NPM",
        url: "https://npmjs.org/package/rpcord",
      })
  );
});
```

Or an advanced one!

```ts
const { RPClient } = require("rpcord");

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

## Note

For now, OAuth only works if you have at least one Redirect URI set in Developer Portal.

## Contributing

You're always welcome to contribute!

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr
