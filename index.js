const webSocket = require("ws");
const ws = new webSocket.Server({ port: 8000 });

ws.addListener("connection", ws => {
    console.log("yesssss!!!!");
});