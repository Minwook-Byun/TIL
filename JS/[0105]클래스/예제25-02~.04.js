// 클래스 선언문 
// class Person {}

// 익명 클래스 표현식  
// const Person = class {};

// 기명 클래스 표현식 
// const Person = class MyClass {};

// 클래스 선언문 
class Person {
    // 생성자 
    constructor(name) {
        // 인스턴스 생성 및 초기화 
        this.name = name; // name 프로퍼티는 public 하다 
    }

    // 프로토타입 메서드 
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }

    // 정적 메서드 
    static sayHello() {
        console.log('Hello!');
    }
}

//인스턴스 생성 
const me = new Person('boram');

//인스턴스의 프로퍼티 참조 
console.log(me.name);

// 프로토타입 메서드 호출
me.sayHi();

//정적 메서드 호출 
Person.sayHello();

