// // 자바스크립트는 html을 읽어주고 수정까지 할 수 있다. 
// document.title = "hello! From JS!"
// // document.body //이렇게 body를 가져올 수도 있다. 
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.className);


// // ****** Searching for Elements ******
// // class이름으로 불러올 때 
// const hellos = document.getElementsByClassName("hello")

// // h1 가져오는 방법 
// // const title = document.getElementsByTagName("h1");

// //css처럼 쓸 수 있는 방법 (위의 h1 특정) => 중복이 있을 경우 첫번째 하나만 가져온다. 
// // const title = document.querySelector(".hello h1");
// //모두 가져오고 싶다면 
// // const title = document.querySelectorAll(".hello h1");

// // ****** Events ******
// title.style.color = "blue"
// event listen
// function handleTitleClick() {
//     console.log("title was clicked!");
//     title.style.color = blue
// }
// 위에서 HTML요소를 가져오고 그 요소에 listener 사용 
// title.addEventListener("click", handleTitleClick);
// 바로 실행시키는 것이 아니라 자바스크립트에 넘겨줘서 유저가 title을 click할 경우에만 실행


// ****** Events(2) ******
// const title = document.querySelector('.title');

// function handleMouseEnter() {
//     title.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!"
// }

// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // ****** Events(3) ******
// function handleWindowResize () {
//     document.body.style.background ="tomato";
// }
// window.addEventListener("resize", handleWindowResize)
// // 패턴을 이애하자!! 
// function handleOfFline(){
//     alert("SOS no WIFI");
// }

// window.addEventListener("offline", handleOfFline)

// ****** CSS in Javascript ******
// const h1 = document.querySelector(".title")

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);


// <⚠️ DONT DELETE THIS ⚠️>

// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// const title = document.querySelector("body h2");

// const superEventHandler = {
//   Enter: function mouseEnterHandler() {
//     title.innerText = "The mouse is here!"
//     title.style.color = "#1abc9c"
//   },
//   Leave:function mouseLeaveHandler() {
//     title.innerText = "The mouse is gone!"
//     title.style.color = "#3498db"
//   },
//   Resize:function Resize() {
//     title.innerText = "You just resized!"
//     title.style.color = "#9b59b6"
//   },
//   RightClick:function RightmouseClick() {
//     title.innerText = "That was a right click!"
//     title.style.color = "#e74c3c"
//   }
// };

// const superEventHandler = {
//   Enter: function mouseEnterHandler() {
//     title.innerText = "The mouse is here!";
//     title.style.color = colors[0];
//   },
//   Leave: function mouseLeaveHandler() {
//     title.innerText = "The mouse is gone!";
//     title.style.color = colors[1];
//   },
//   Resize: function Resize() {
//     title.innerText = "You just resized!";
//     title.style.color = colors[2];
//   },
//   RightClick: function RightmouseClick() {
//     title.innerText = "That was a right click!";
//     title.style.color = colors[-1];
//   }
// };


// console.log(title)

// title.addEventListener("mouseenter", superEventHandler.Enter);
// title.addEventListener("mouseleave", superEventHandler.Leave);
// window.addEventListener("resize", superEventHandler.Resize);
// window.addEventListener("contextmenu", superEventHandler.RightClick);

const title = document.querySelector("h1");
const stageWidth = clientWidth;

if (title > stageWidth * 0.8) {
  title.classList.add("desktop-size");
}
