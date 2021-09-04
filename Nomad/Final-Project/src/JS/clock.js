

function Timer() {
    const clock = document.querySelector("#clock");
    const time = new Date();
    const hours = time.getHours(); // 시
    const minutes = time.getMinutes(); // 분
    const seconds = time.getSeconds(); // 초
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(Timer,1000)