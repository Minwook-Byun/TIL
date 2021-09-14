import http from "http";
import WebSocket from "ws";
import express from "express";
import {
    PassThrough
} from "stream";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({
    server
});

function onSocketClose() {
    console.log("Disconnected from the Browser ❌");
}

const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"]="익명의 사용자";
    console.log("Connected to Browser ✅");
    socket.on("close", onSocketClose);
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        switch (parsedMessage.type) {
            case "new_message":
                sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`.toString('utf-8')));
            case "nickname":
                socket["nickname"] = parsedMessage.payload;
                break;
        }

        // if (parsedMessage.type === "new_message") {
        //     sockets.forEach((aSocket) => aSocket.send(parsedMessage.payload.toString('utf-8'))); //payload는 지금 입력해주는 값 
        // } //어떤 메세지를 받는지 구분을 시켜주고 있다. 
        // else if(parsedMessage.type === "nickname") {
        //     console.log(parsedMessage.payload);
        // }

    });
});

server.listen(3000, handleListen);