const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // (1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체 
    Person.prototype = {
        // constructor 프로퍼티와 생성자 함수 간의 연결을 설정 
        constructor : Person,
        sayHello(){
            console.log(`Hi my name is ${this.name}`)
        }
    };

    return Person;
}());

const me  = new Person('boram');
