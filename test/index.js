const { RPClient } = require("../dist/client");
const { Packet } = require("../dist/packet");
const { OpCode, Command } = require("../dist/types");
const { id, secret } = require("./config.json");

const rpc = new RPClient("663356714376101889", {
  secret,
  scopes: ["rpc", "messages.read"],
});

rpc.on("messageCreate", (msg) => {
  console.log(msg);
});

rpc.connect().then(async () => {
  console.log("Connected!", rpc.user.username + "#" + rpc.user.discriminator);

  rpc.ipc.on("packet", console.log);
  const lobby = await rpc.createLobby({});
  console.log("Lobby", lobby);
  await rpc.updateLobby(lobby.id, { type: 2 });
  console.log(await rpc.searchLobbies());

  // rpc.authorize().then(() => {
  //   console.log("Auth Complete!");

  //   rpc.subscribe("MESSAGE_CREATE", {
  //     // dont forget to replace this channel id with the one you want to listen messages for
  //     channel_id: "783319033730564098",
  //   }).then(() => {
  //     console.log("Subscribed!");
  //   });
  // })
});