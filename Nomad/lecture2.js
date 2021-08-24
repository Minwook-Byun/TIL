// ***************Variables*************** 

console.log(545454);
// 콘솔에 log하거나 print하는 일을 한다. 

console.log("lalalalalal");
//string도 사용 가능. "로 시작하면 "로 끝내야한다 (숫자나 문자를 출력할 수 있다)

//이렇게 사칙 연산도 가능하다. 
console.log(5 + 2);
console.log(5 * 2);

// const 변하지 않는 것을 선언할 때 
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);

//Camel case 자바스크립트에서는 띄어쓰기가 필요하면 대문자로 써준다! 
const veryLongVariableName = 0;

const myName = "boram";
console.log("hello " + myName);


// ***************Const & let*************** 
// const a = 5;
// const b = 2;

//절대로 바꾸지 않을 a, b 

console.log(a + b);
console.log(a * b);

//let은 이후에 업데이트 가능하다. 
//기본적으로 const를 사용하고 필요할 때만 let을 쓴다. 

let myName = "boram";
console.log("hello " + myName);

myName = "minwook";
console.log("hello " + myName);

//변수로 작성자의 의도를 파악할 수 있다.  

//예전에는 var을 사용했었다. var은 어디에서나 업데이트 가능. -> 그래서 보호를 받지 못한다! 
//ALWAYS const SOMETIMES let NEVER USE var 

//2-4 Booleans
// True & false 

// null => nothing here 
const apple = null;

let something;
console.log(something);
// undefined, null과 다름. null은 자연스럽게 생기지 않는다. 어떤 것이 없다는 것을 확실하게 써주기 위해서 사용한다. 


// ***************array []***************
// const로 일주일을 모두 선언한다면? 비효율적! 변수가 엄청 많아 지게 된다 
// const daysOfWeek = mon + tues + wed + fri ;
// 이렇게 할 경우 접근 조차 하기가 힘들다
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);
//Get Item from Array 
console.log(daysOfWeek[5]); //이렇게 접근할 수 있다. 

//Add one more day to the array
daysOfWeek.push("sun")


//***************objects {}***************
const playerName = "boram"
const playerPoint = "1"
const playerHandsome = "true"

// 이렇게 플레이어를 구성하는 것을 만들 수 있디. 근데 모든  property이름을 정해야 한다! 

// 배열로 선언해준다고 하더라도 각각에 대응하게 만들어 줄 수 없음
 const player = [boram, 1, true];

const player = {
    // 여기 안에서는 = 보다 : 을 사용하고 ,을 사용
    name : "boram",
    point:10,
    handsome: true
};
// 리스트는 모두 같은 값을 가지고 있다. 그래서 위는  player.name, player.point 이렇게. 
console.log(player);
console.log(player.name); 
player.handsome = false; 
player = false; //위처럼 안에 요소를 수정하는 것에는 문제가 없지만 아래처럼 const를 수정하면 문제가 생긴다. 
player.height = "180"; //이렇게 없는 것을 추가할 수도 있고 업데이트도 할 수 있다. 

