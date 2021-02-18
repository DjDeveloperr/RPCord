const { RPClient } = require("../dist/client");
const { Packet } = require("../dist/packet");
const { OpCode, Command, RPCEvent } = require("../dist/types");
const { id, secret } = require("./config.json");

const rpc = new RPClient("663356714376101889", {
  secret,
  scopes: ["rpc", "messages.read"],
});

rpc.on("messageCreate", (msg) => {
  console.log(msg);
});

rpc.on("error", () => { });
rpc.on("dispatch", (d) => { console.log(d); })

rpc.connect().then(async () => {
  console.log("Connected!", rpc.user.username + "#" + rpc.user.discriminator);

  // await rpc.openOverlayVoiceSettings();
  // const lobby = await rpc.createLobby({});
  // console.log("Lobby", lobby);
  // // await rpc.updateLobby(lobby.id, {});
  // console.log(await rpc.searchLobbies());

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