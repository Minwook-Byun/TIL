const Person = (function () {
    // 생성자 함수 
    function Person(name) {
        this.name = name;
    }
    // 프로토타입 메서드 
    Person.prototype.sayHello = function () {
        console.log(`Hi! my name is ${this.name}`);
    }
    // 생성자 함수를 반환 
    return Person;
}());

const me = new Person('Lee');

//인스턴스 메서드 
me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
}

//인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다
me.sayHello();
//Hey! My name is Lee

//인스턴스 메서드를 삭제한다 
delete me.sayHello; // ****지울 때는 () 안 붙인다!  ****
// 인스턴스 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다 
me.sayHello(); //Hi! my name is Lee

// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHello;
// 프로토타입 메서드가 호출된다
me.sayHello();
//Hi! my name is Lee

//프로토타입 메서드 변경 
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};

delete Person.prototype.sayHello;