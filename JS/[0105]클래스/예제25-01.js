// ES5 생성자 함수 
var Person = (function () {
    //생성자 함수 
    function Person(name) {
        this.name = name;
    }
    // 프로토타입 메서드 
    Person.prototype.sayHi = function () {
        console.log('Hi My Name is ' + this.name)
    };

    // 생성자 함수 반환 
    return Person;
}());

//인스턴스 생성 
var me = new Person('Boram');
me.sayHi()