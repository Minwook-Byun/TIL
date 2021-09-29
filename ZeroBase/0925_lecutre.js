// function Animal(type, name, sound){
//     // 객체 생성자할 때는 대문자로 시작
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     // this.say = function(){
//     //     console.log(this.sound);
//     // }
//     // 아래에서 만들어질 객체를 의미한다. 
// }

// // 하나의 객체를 만들게 되고 
// const dog = new Animal('개', '멍멍이', '멍멍');
// // new로 새로운 객체 생성. 
// Animal.prototype.say = function(){
//     console.log(this.sound)
//     // 생성되는 모든 것에 say를 넣어주자.
//     // 객체를 만들 때 공통적인 value나 함수를 넣어주자. 
// }


let x = 1;

function func(){
    console.log(x);
    let x =2; 
}

func();