
function Timer() {
    const clock = document.querySelector("#clock");
    const time = new Date();
    const hours = String(time.getHours()).padStart(2,"0"); // 시
    const minutes = String(time.getHours()).padStart(2,"0"); // 분
    const seconds = String(time.getSeconds()).padStart(2,"0"); // 초
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

Timer();
setInterval(Timer,1000)