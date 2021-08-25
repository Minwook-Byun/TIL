// *** function part 1 ***

// 만약 Hello my name is ooo을 이름만 바꾸면서 출력하고 싶다면? 
function sayHello(nameOfPerson, age){//캡슐화해서 실행을 여러 번 할 수 있다. () {실행할 코드 블록}
    console.log("Hello" +"my name is " + nameOfPerson + " and I'm"+age);
    //nameOfPerson, age는 function의 body 안에만 존재한다. 
}

sayHello("boram", 26);

function plus(a , b){
    console.log(a + b);
}

plus(1 , 2);

 function divide (a, b){
     console.log(a / b);
 }

 divide(98, 20)

 //위에 써준 것첢 a,b 는 함수 안에만 존재한다. 

 const player = {
     name : "boram",
     sayHelllo: function(otherPersonName) {
         console.log("hello " + otherPersonName + " nice to meet you")
     }
 };

 console.log(player.name);
 player.sayHelllo("bora")

// 많은 argument를 send해면 제일 처음 것 하나만 받는다. 

 //Recap 

 const a = 5;
 let boramIsFat = true;

 boramIsFat = false;

// 이후에 변경하고 싶다면, let을 사용하면 된다. 
// boolean은 오직 true, false 2가지 옵션만 있다. 
// null 은 비어 있음을 의도적으로 선언할 때 사용 

let hello;
console.log(hello); //undefiend 

// array 
// const days = [1, 2, flase, true, null, "text", me];
// const toBuy = ["photato", "tomato", "pizza"];

// console.log(toBuy[2]);
// toBuy[2] = "water" // to buy의 3번째 값을 인덱싱 하는 것
// toBuy.push("banana"); //끝에다 추가함

//Returns 

const age = 96;
function calculateKrage(ageOfForeigner){
   ageOfForeigner + 2; 
   return "hello"
}

const krAge = calculateKrage(age);
// return 값을 반환하게 된다. 
// console은 값을 보여줄 뿐 가질 수는 없다. 그런데 return은 그 값을 가지고 있다. 
// value를 가지고 있으려면, or 함수 바깥에서 쓰고 싶다면 return을 써야 한다. 
// 한 번 return을 하면, 함수는 끝나버린다. 


//****Conditional****

const yourAge = prompt("how old are you?");
// 자바스크립트를 멈추게 함. prompt의 역할 그래서 더 이상 prompt를 사용하지 않는다. css도 하지 못함. 
// very very old method 

console.log(isNaN(age));

if(isNaN(age)) {                      // 이 부분이 true이면
    console.log("plz write a number") // 이 부분을 실행 
} else{
    console.log("thanks")             // 아니면 이 부분을 실행한다
}



if(isNaN(age)) {                      
    console.log("plz write a number") 
} else if(age < 18) {
    console.log("you are too young")             
} else{
    console.log("you can drink")
}
