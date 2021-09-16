import http from "http";
import {
    Server
} from "socket.io";
// import WebSocket from "ws";
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

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

wsServer.on("connection", (socket) => {
    socket.onAny((e) => {
        console.log(`socket Event: ${e}`)
    });
    socket.on("enter_room", (roomName, done) => {
        console.log(socket.rooms);
        socket.join(roomName);
        console.log(socket.rooms); //어느 room에 있는가 
        done(); // done은 여기서 실행하는 것이 아니라 프론트에 있는 함수로 가서 실행해주는 것 보.안.문.제(실행버튼을 눌러준다)
        socket.to(roomName).emit("welcome") //모든 사람들에게 welcome을 실행해준다. 프론트에서 이걸 반응하도록 만들어준다.
    });
    // 뒤에 원하는 event를 넣기만 하면 된다. 
})

// client에게도 설치하게 해줘야함. 웹소켓은 socket.io와 호환이 되지 않는다. 
// that's why they give this url

// const wss = new WebSocket.Server({
//     server
// });

// function onSocketClose() {
//     console.log("Disconnected from the Browser ❌");
// }

// const sockets = [];

// wss.on("connection", (socket) => {
//     sockets.push(socket);
//     socket["nickname"]="익명의 사용자";
//     console.log("Connected to Browser ✅");
//     socket.on("close", onSocketClose);
//     socket.on("message", (message) => {
//         const parsedMessage = JSON.parse(message);
//         switch (parsedMessage.type) {
//             case "new_message":
//                 sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`.toString('utf-8')));
//             case "nickname":
//                 socket["nickname"] = parsedMessage.payload;
//                 break;
//         }

//         // if (parsedMessage.type === "new_message") {
//         //     sockets.forEach((aSocket) => aSocket.send(parsedMessage.payload.toString('utf-8'))); //payload는 지금 입력해주는 값 
//         // } //어떤 메세지를 받는지 구분을 시켜주고 있다. 
//         // else if(parsedMessage.type === "nickname") {
//         //     console.log(parsedMessage.payload);
//         // }

//     });
// });
httpServer.listen(3000, handleListen);