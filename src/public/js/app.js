const messageList = document.querySelector("ul")
const nickForm = document.querySelector("#nick")
const messageForm = document.querySelector("#message")
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");

});

function makeMessage(type, payload) {
    const msg = {
        type,
        payload
    };
    return JSON.stringify(msg);
}


socket.addEventListener("message", (message) => {
    // console.log("New message: ", message.data);
    // 메세지를 받으면, 새로운 li를 만들어준다. 
    const li = document.createElement("li");
    // 메세지 데이타를 li안에 넣어준다 
    li.innerText = message.data;
    // li를 messagelist(ul)에 넣어준다. 
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});

setTimeout(() => {
    // 백엔드로 보내는 메세지 
    socket.send("hello from the browser!");
}, 10000);

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    // 프론트에서 백엔드로 보내주기 
    socket.send("new_message", input.value);
    console.log(input.value);
    input.value = "";

}

function handleNickSubmit(e) {
    e.preventDefault();
    const input = nickForm.querySelector("input")
    socket.send(
        makeMessage("nickname", input.value)
    )
}

nickForm.addEventListener("submit", handleNickSubmit);
messageForm.addEventListener("submit", handleSubmit);