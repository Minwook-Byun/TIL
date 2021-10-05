// function foo() {}
// // 함수는 객체이므로 프로퍼티를 소유할 수 있다. 
// foo.prop = 10; 

// //함수는 객체이므로 메서드를 소유할 수 있다. 
// foo.method = function () {
//     console.log(this.prop);
// };

// foo.method(); // 10

// function foo() {}

// foo(); // [[Call]]이 호출된다. 

// new foo(); //[[Construct]]가 호출된다.

// 일반 함수 정의 : 함수 선언문, 함수 표현식 
// function foo() {}
// const bar = function () {};
// const baz = {
//     x: function() {}
// };

// new foo();
// new bar();
// // new baz();

// const arrow = () => {};
// new arrow(); 


// function add(x,y) {
//     return x + y;
// }

// let inst = new add();

// console.log(inst);

// function createUser(name, role){
//     return {name, role};
// }

// // 일반 함수를 new연산자와 함께 호출 
// inst = new createUser('lee','admin');
// // 함수가 생성한 객체를 반환한다. 
// console.log(inst);

// 생성자 함수 
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// // new 연산자 없이 생젓ㅇ자 함수를 호출하면 일반 함수로서 호출된다. 
// const circle = Circle(5);
// console.log(circle); //undefined

// console.log(radius); //5
// console.log(getDiameter()); //10

// circle.getDiameter(); //TypeError: Cannot read property 'getDiameter' of undefined

// 파스칼 케이스로 명명해서 생성자 함수임을 보여준다.
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다. 
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다. 
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 이제 new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다. 
const circle = Circle(5);
console.log(circle.getDiameter()); //10
