class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티
    //getter함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //setter함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Boram', 'Byun');

//데이터 프로퍼티를 통한 프로퍼티 값의 참조 
console.log(`${me.firstName} ${me.lastName} `); //Boram Byun

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다 
me.fullName = 'Boram Byun';
console.log(me) //Person { firstName: 'Boram', lastName: 'Byun' }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조 
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다 
console.log(me.fullName);

//fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다 
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: false,
//     configurable: true
//   }
  