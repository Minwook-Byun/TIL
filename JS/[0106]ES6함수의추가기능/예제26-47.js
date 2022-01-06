class 부모 {
    constructor(name){
        this.name = name;
    }

    sayHi() {
        return `Hi ${this.name}`;
    }
}

class 자식 extends 부모 {
    //화살표 함수의 super은 상위 스코프인 constructor의 super를 가리킨다 
    sayHi = () => `${super.sayHi()}, 새로운 자식은 언제나 환영이야~`;
}

const derived = new 자식('Boram');
console.log(derived.sayHi()); //Hi Boram, 새로운 자식은 언제나 환영이야~

