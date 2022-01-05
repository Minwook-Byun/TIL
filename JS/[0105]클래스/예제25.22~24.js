// 생성자 함수 
function Univ(name){
    this.name = name;
}

// 프로토타입 메서드 
Univ.prototype.sayWelcome = function(){
    console.log(`${this.name}을 만나면 세계가 보인다!`)
};

const HUFS = new Univ('외대');
HUFS.sayWelcome();//외대을 만나면 세계가 보인다!

class Person {
    //생성자 
    constructor(name){
        //인스턴스 생성 및 초기화 
        this.name = name;
    }

    //프로토타입 메서드 
    sayHi(){
        console.log(`Hi My name is ${this.name}.`)
    }
}

const me = new Person('Boram');
me.sayHi() //Hi My name is Boram.


