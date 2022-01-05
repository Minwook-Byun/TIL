class Person {}

// //인스턴스 생성 
// const me = new Person();
// console.log(me); //Person {}

const me = Person(); //TypeError: Class constructor Person cannot be invoked without 'new'

const Boram = class MyClass{};
const myName = new Boram();

// 클래스 이름 Myclass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다 
console.log(MyClass) ////ReferenceError

const you = new MyClass(); //ReferenceError

