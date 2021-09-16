// 알아서 socket.io를 실행하고 있는 서버를 찾아간다. 
const socket = io();
// 이미 room 기능이 있다. 
const welcome = document.querySelector("#welcome")
const room = document.querySelector("#room");
const form = welcome.querySelector("form");

room.hidden = true;

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3")
    h3.innerHTML = `Room ${roomName}`;
}
let roomName;

function addMessage(message) {
    message.preventDefault();
    const ul = room.querySelector("ul");
    const li = document.createElement("li")
    li.innerHTML = message;
    ul.appendChild(li); //ul에 li를 더한다! 순서 주의 
}

function handleRoomsubmit(e) {
    e.preventDefault();
    const userInput = form.querySelector("input");
    socket.emit("enter_room", userInput.value, showRoom);
    //어떤 것이든 emit할 수 있다. 또한 한 가지만 보낼 필요도 없고 object, function도 모두 가능하다. 프론트에서 보낼 수 있는데 같은 이름이어야 한다.
    // 예전에는 먼저 object를 string으로 변환시키고 
    // 그 다음에 string을 전송해야 했었다. socketIO는 그럴 필요가 없다. 
    // argumnet는 얼마든지 넣을 수 있지만 백엔드가 끝났다는 function을 넣으려면 가장 마지막에 넣어야 한다. 
    roomName = userInput.value;
    userInput.value = ""
};

form.addEventListener("submit", handleRoomsubmit);


socket.on("welcome", () => {
    addMessage("someone joined!")
})