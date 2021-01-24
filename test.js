const { DiscordIPC } = require("./dist/ipc");
const { Packet } = require("./dist/packet");
const { OpCode } = require("./dist/types");
const { RPClient } = require("./dist/client");
const { Presence } = require("./dist/presence");

const id = "697379674048692274";
const secret = "G-wMwb2Z3-dotVDwCIVVsTDQ1NLwpy5b";

const ipc = new RPClient(id, {
  secret,
  scopes: ["rpc", "messages.read"]
});

ipc.on("messageCreate", (msg) => {
  console.log(msg);
})

ipc.connect().then(() => {
  console.log("Connected!", ipc.user.username + "#" + ipc.user.discriminator);

  ipc.authorize().then(() => {
    console.log("Auth Complete!");

    ipc.subscribe("MESSAGE_CREATE", {
      channel_id: "783319033730564098",
    }).then(() => {
      console.log("Subscribed!");
    });
  })
});