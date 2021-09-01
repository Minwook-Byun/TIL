//시계 만들기 

const clock = document.querySelector("h1#clock")

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000); //5000ms = 5seconds every 5seconds it prints hello

// setTimeout(sayHello,5000); //함수 실행을 위해서 기다릴 시간 

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
   clock.innerHTML = `${hours}h:${minutes}m:${seconds}s`;
}

// 근데 04, 05 이렇게 표시가 되지 않는다. => 그런 고민을 당신이 한다면, 이전에 개발자들도 그런 고민을 했을 것이다. 

getClock();
setInterval(getClock,1000);

// "1".padStart(2,"0")  padStart : padding을 추가해준다. 길이는 총 2가 되어야 하고 만약 되지 않는다면 0을 추가해준다. 자매품 padEnd