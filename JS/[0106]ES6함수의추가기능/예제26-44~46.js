//Bad 
class Person {
    // 클래스 필드 정의 제안
    name = 'boram'
    sayHi = () => console.log(`Hi ${this.name}`);
}

const person = new Person();
person.sayHi(); //Hi boram

class BadPerson {
    constructor() {
        this.name = 'boram';
        // 클래스가 생성한 인스턴스 this의 sayHi 프로퍼티에 화살표 함수를 할당한다 
        // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다 
        this.sayHi = () => console.log(`Hi ${this.name}`)
    }
}

//예제 26-46
//Good 
class GoodPerson {
//클래스 필드 정의 
name = 'Boram';
sayHi() {console.log(`Hi ${this.name}`)}
}

const goodPerson = new GoodPerson();
goodPerson.sayHi(); //Hi Boram

