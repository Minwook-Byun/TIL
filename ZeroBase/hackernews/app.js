// 네트워크 너머 서버에 있는 것을 가져오는 도구가 필요하다. 
const ajax = new XMLHttpRequest(); //반환한 값을 ajax라는 변수에 저장. 
ajax.open('GET','https://api.hnpwa.com/v0/news/1.json', false); //우리가 동기적으로 가져오겠다(falss), 비동기(true)
ajax.send();

console.log(ajax.response);
