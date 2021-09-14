import http from "http";
import WebSocket from "ws";
import express from "express";

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

const userSockets = [];

// 여기서 백엔드에서 listen을 해주는 것.
// 파폭, 브레이브, 크롬에도 작동을 하지만 
// 각각의 브라우저 내에서만 소통을 하고 
// 서로 다른 브라우저끼리는 소통이 되지 않는다. 
wss.on("connection", (socket) => {
    // firefox, brave가 연결될 때 여기에 소켓을 넣어준다. 
    userSockets.push(socket); // [brave, firefox]
    console.log("Connected to Browser ✅");
    socket.on("close", () => console.log("Disconnected from the Browser ❌"));
    socket.on("message", (message) => {
        userSockets.forEach(aSocket => aSocket.send(message));
    });
});

// 근데 누가 접속했는지 모른다. 위 코드는 두번 작동
// BRAVER와 연결될 때, 파이어폭스에서 연결될 때
// 몇 명이 연결되어 있는지도 모른다. 

server.listen(3000, handleListen);

