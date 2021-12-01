// function Circle(radius){
//     this.radius = radius;
//     this.getArea = function () {
//         return Math.PI * this.radius ** 2;
//     };
// }

// const circle1 = new Circle(1); // 반지름이 1인 인스턴스 생성
// const circle2 = new Circle(2); //반지름이 2인 인스턴스 생성

// console.log(circle1.getArea === circle2.getArea) //false
// console.log(circle1.getArea()) // 3.141xxxxxxx
// console.log(circle2.getArea()) //12.xxxxxxxxxx


// function Circle(radius){
//     this.radius = radius
// }

// // circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서
// // 사용할 수 있도록 프로토타입에 추가한다. 프로토타입은 Circle 생성자함수의 prototype 프로퍼티에 바인딩

// Circle.prototype.getArea = function(){
//     return Math.PI * this.radius ** 2;   
// }

// //인스턴스 생성 
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea) //true
// console.log(circle1.getArea()) // 3.141xxxxxxx
// console.log(circle2.getArea()) //12.xxxxxxxxxx

// (function () {}).hasOwnProperty('prototype'); // true
// //함수객체는 prototype 프로퍼티를 소유한다 
// ({}).hasOwnProperty('prototype')//false
// //일반 객체는 prototype 프로퍼티를 소유하지 않는다

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('boram')

// console.log(me.constructor === Person); //true

// console.log(Person.prototype); // {constructor:f}

// function Person(name){
//     this.name = name;
// }

// const Person = name => {
//     this.name = name;
// }

// console.log(Person.prototype); // undefined

// function Person(name){
//     this.name = name;
// }

// //프로토타입 메서드 
// Person.prototype.sayHello = function() {
//     console.log(`Hi ${this.name}`)
// }

// const me = new Person('boram')

// console.log(me.hasOwnProperty('name')) //true

// const Person = (function() {
//     //생성자 함수 
//     function Person(name){
//         this.name = name;
//     }

//     //프로토타입 메서드 
//     Person.prototype.sayHello = function () {
//         console.log(`Hi ${this.name}`)
//     };

//     //생성자 함수를 반환 
//     return Person;
// }());

// const me = new Person('boram');

// me.sayHello = function() {
//     console.log(`Hey~~ ${this.name}`) 
// };

// me.sayHello(); //Hey~~ boram

// const Person = (function() {
//     //생성자 함수 
//     function Person(name){
//         this.name = name;
//     }

//     //프로토타입 메서드 
//     Person.prototype.sayHello = function () {
//         console.log(`Hi ${this.name}`)
//     };

//     //생성자 함수를 반환 
//     return Person;
// }());

// const me = new Person('boram');

// me.sayHello = function() {
//     console.log(`Hey~~ ${this.name}`) 
// };

// delete me.sayHello; //인스턴스 메서드 삭제

// me.sayHello(); //Hi boram

// Person.prototype.sayHello = function() {
//     console.log()
// }

// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }

//     // 생성자 함수의 prototype프로퍼티를 통해 프로토타입을 교체
//     Person.prototype ={
//         sayHello() {
//             console.log(`Hi ${this.name}`)
//         }
//     };

//     return Person
// }());

// const me = new Person('boram');

// function Person(name) {
//     this.name = name;
// }

// const me  = new Person('boram');

// //Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다 
// console.log(me instanceof Person); //true

// //Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다 
// console.log(me instanceof Object); //true

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('boram')

// const parent = {}

// Object.setPrototypeOf(me, parent);

// // person 생성자 함수와 parent 객체는 연결되어 있지 않다
// console.log(Person.prototype === parent); //false
// console.log(parent.constructor === Person); // false

// //Person.prototype이 me 객체의 프로토타입 체인 상에 존재 하지 않기 때문에 false로 평가된다
// console.log(me instanceof Person) // false

// //Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true
//  console.log(me instanceof Object); //true

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('boram')

// //프로토타입으로 교체할 객체
// const parent = {}

// //프로토타입의 교체 
// Object.setPrototypeOf(me, parent);

// // person 생성자 함수와 parent 객체는 연결되어 있지 않다
// console.log(Person.prototype === parent); //false
// console.log(parent.constructor === Person); // false

// // parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다
// Person.prototype = parent

// //Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로  true로 평가된다
// console.log(me instanceof Person) // false -> true

// //Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true
//  console.log(me instanceof Object); //true -> true

// 프로토타입이 null인 객체를 생성한다. 생성된 객첸느 프로토타입 체인의 종점에 위치한다 
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null) // true
//Object.prototype을 상속받지 못한다
// console.log(obj.toString()) //TypeError: obj.toString is not a function

//obj -> Object.prototype -> null
//obj = {x :1}과 동일하다 
obj = Object.create(Object.prototype, {
    x : { value :1, writable :true, enumerable :true, configurable :true}
});
// 위 코드는 아래와 동일하다 
// obj = Object.create(Object.prototype);
// obj.x =1;
console.log(obj.x) //1
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

const myProto = {x : 10};
//임의의 객체를 직접 상속 받는다  
// obj - myProto - Object.prototype - null
obj = Object.create(myProto);
console.log(obj.x)
console.log(Object.getPrototypeOf(obj)=== myProto) //true

//생성자 함수 
function Person(name){
    this.name = name 
}

//obj - Person.prototype - Object.prototype - null
//obj = new Person('boram')과 동일하다 
obj = Object.create(Person.prototype);
obj.name = 'boram';
console.log(obj.name) // boram
console.log(Object.getPrototypeOf(obj)===Person.prototype) //true