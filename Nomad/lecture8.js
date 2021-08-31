const loginForm = document.getElementById("login-form")
// ById 일 때는 #등을 붙이지 않아도 되지만  querySelector일 경우에는 표시를 해줘야 한다. 
// 이렇게 document자체에서 div를 가져오고, 이후에 그 안에서 정밀조사로 input, button을 가져온다. 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function logSubmit() {
    // console.log("click!!!!") 버튼 클릭이 되면, click출력
    // 어떻게 input에 적힌 값을 가져올까? 
    console.log(loginInput.value);
    // loginInput의 value값을 가져와라 
    const username = loginInput.value;
    if (username === "") { //암시롱도 없으면
        alert("please write your name"); //출력
    } else if (username.length > 15){
        alert("Your name is too long")
    }
    // 이런 작업은 HTML을 통해서도 할 수 있따. 
    // 근데 INPUT안의 FORM을 누를 때마다 전체가 새로고침이 된다. 
}

// ===Event===
loginButton.addEventListener("submit", logSubmit);

logSubmit() //이렇게 적으면, 브라우저가 보는 순간 실행을 시킨다. add~는 저 이벤특 있을 때만 실행한다. 
// preventDefault => 기본동작을 실행해주지 않는다. 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const sayHello = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장할 때 사용한다.
const USERNAME_KEY ="username" // 본인이 만든 string을 반복해서 사용할 경우, 이렇게 스트링이라 명시하고 선언한 뒤 사용! 

function onLoginSubmit(event) {
    event.preventDefault(); //기본 동작은 막아주고 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    sayHello.innerText = `Hello ${username}`; //string과 변수를 합치는 방법! ${변수값}
    sayHello.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick);

handleLinkClick({//방금 막 일어났던 정보를 제공해준다
// 이 경우에는 click이기 때문에, MouseEvnet로 클릭했던 x,y 좌표 등 위치가 제공된다. 
})

// ****addEventListener 안에 있는 함수는 직접 실행하지 않는다. 내가 하는 것이 아니라 브라우저가 하는 것이고 event에 관한 정보를 제공해준다. 

