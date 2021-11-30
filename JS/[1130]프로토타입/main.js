function Circle(radius){
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

const circle1 = new Circle(1); // 반지름이 1인 인스턴스 생성
const circle2 = new Circle(2); //반지름이 2인 인스턴스 생성

console.log(circle1.getArea === circle2.getArea) //false
console.log(circle1.getArea()) // 3.141xxxxxxx
console.log(circle2.getArea()) //12.xxxxxxxxxx


function Circle(radius){
    this.radius = radius
}

// circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서
// 사용할 수 있도록 프로토타입에 추가한다. 프로토타입은 Circle 생성자함수의 prototype 프로퍼티에 바인딩

Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;   
}

//인스턴스 생성 
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea) //true
console.log(circle1.getArea()) // 3.141xxxxxxx
console.log(circle2.getArea()) //12.xxxxxxxxxx

(function () {}).hasOwnProperty('prototype'); // true
//함수객체는 prototype 프로퍼티를 소유한다 
({}).hasOwnProperty('prototype')//false
//일반 객체는 prototype 프로퍼티를 소유하지 않는다

function Person(name) {
    this.name = name;
}

const me = new Person('boram')

console.log(me.constructor === Person); //true

console.log(Person.prototype); // {constructor:f}

function Person(name){
    this.name = name;
}

const Person = name => {
    this.name = name;
}

console.log(Person.prototype); // undefined

function Person(name){
    this.name = name;
}

//프로토타입 메서드 
Person.prototype.sayHello = function() {
    console.log(`Hi ${this.name}`)
}

const me = new Person('boram')

console.log(me.hasOwnProperty('name')) //true

const Person = (function() {
    //생성자 함수 
    function Person(name){
        this.name = name;
    }

    //프로토타입 메서드 
    Person.prototype.sayHello = function () {
        console.log(`Hi ${this.name}`)
    };

    //생성자 함수를 반환 
    return Person;
}());

const me = new Person('boram');

me.sayHello = function() {
    console.log(`Hey~~ ${this.name}`) 
};

me.sayHello(); //Hey~~ boram

const Person = (function() {
    //생성자 함수 
    function Person(name){
        this.name = name;
    }

    //프로토타입 메서드 
    Person.prototype.sayHello = function () {
        console.log(`Hi ${this.name}`)
    };

    //생성자 함수를 반환 
    return Person;
}());

const me = new Person('boram');

me.sayHello = function() {
    console.log(`Hey~~ ${this.name}`) 
};

delete me.sayHello; //인스턴스 메서드 삭제

me.sayHello(); //Hi boram

Person.prototype.sayHello = function() {
    console.log()
}

const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    // 생성자 함수의 prototype프로퍼티를 통해 프로토타입을 교체
    Person.prototype ={
        sayHello() {
            console.log(`Hi ${this.name}`)
        }
    };

    return Person
}());

const me = new Person('boram');