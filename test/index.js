const { RPClient } = require("../dist/client");
const { id, secret } = require("./config.json");

const ipc = new RPClient(id, {
  secret,
  scopes: ["rpc", "messages.read"],
});

ipc.on("messageCreate", (msg) => {
  console.log(msg);
});

ipc.connect().then(() => {
  console.log("Connected!", ipc.user.username + "#" + ipc.user.discriminator);

  ipc.authorize().then(() => {
    console.log("Auth Complete!");

    ipc.subscribe("MESSAGE_CREATE", {
      // dont forget to replace this channel id with the one you want to listen messages for
      channel_id: "783319033730564098",
    }).then(() => {
      console.log("Subscribed!");
    });
  })
});