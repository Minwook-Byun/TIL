// var x = 1;
// var y = 1;

// var x = 100;
// var y;

// console.log(x, y); //100 1

// var x = 1;

// if(true){
//     var x = 10;
// }

// console.log(x) //10


// let x = 1;

// if(true){
//     let x = 10; 
// }

// console.log(x) //1

// console.log(foo) // undefined

// foo = 123; 

// console.log(foo) //123

// var foo;

// var foo = 123;
// var foo = 456;

// let bar = 123;
// let bar = 456; //SyntaxError: Identifier 'bar' has already been declared


// let foo =1;
// {
//     let foo = 2;
//     let bar = 3;
// }

// console.log(foo) //1
// console.log(bar) //ReferenceError: bar is not defined

// console.log(foo); //ReferenceError: Cannot access 'foo' before initialization

// let foo;
// console.log(foo); //undefined

// foo = 1;
// console.log(foo);//1

// let foo = 1; 

// {
//     console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
//     let foo = 2; 
// }

// var x = 1; // 전역 변수 
// y = 2; // 전역 변수 

// function foo() {}

// // var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다
// console.log(window.x) // 1
// console.log(x) //1

// console.log(window.y) // 2
// console.log(y) //2

// console.log(window.foo) // foo() {}
// console.log(foo) //foo {}

// const TAX_RATE = 0.1; 

// const person = {
//     name: 'boram'
// }

// person.name = 'borami'

// console.log(person) //{ name: 'borami' }