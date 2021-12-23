// const o = {};
// // o.[[prototype]]  //SyntaxError: Unexpected token '['
// console.log(o.__proto__) //[Object: null prototype] {}

// const person = {
//     name : 'Lee'
// }

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person))
// //{ value: 'Lee', writable: true, enumerable: true, configurable: true }
// // //{
// //     name: {
// //         value: 'Lee',
// //         writable: true,
// //         enumerable: true,
// //         configurable: true
// //       },
// //       age: { value: 20, writable: true, enumerable: true, configurable: true }
// //     }
    
// const person = {
//     // 데이터 프로퍼티
//     firstName : 'Minwook',
//     lastName : 'Byun',

//     // fullName은 접근자 함수로 구성된 접근자 프로퍼티 
//     // getter 함수 
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     //setter 함수 
//     set fullName(name) {
//         // 배열 디스트럭처링 할당
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(person.firstName + ' ' + person.lastName); //Minwook Byun

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // fullName에 값을 저장하면 setter 함수가 호출 
// person.fullName = "Boram Lee";
// console.log(person); //{ firstName: 'Boram', lastName: 'Lee', fullName: [Getter/Setter] }

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // fullName에 접근하면 getter 함수가 호출된다
// console.log(person.fullName) //Boram Lee


// // firstName은 데이터 프로퍼티
// let discriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(discriptor); //{ value: 'Boram',writable: true,enumerable: true,configurable: true}

// // fullName은 접근자 프로퍼티 
// let descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);   

// //{ get: [Function: get fullName], set: [Function: set fullName],    enumerable: true,   configurable: true  }


const person = {};

//데이터 프로퍼티 정의 
Object.defineProperty(person, 'firstName', {
    value : 'boram',
    writable : true,
    enumerable : true, 
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value : 'Lee' 
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor) //firstName 을 출력 
// firstName {
//     value: 'boram',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
  
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor) 
// lastName {
//     value: 'Lee',
//     writable: false,
//     enumerable: false,
//     configurable: false
// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다 

//[[Enumerable]] 의 값이 false인 경우 
//해당 프로퍼티는 for ... in 문이나 Object.keys 등으로 열거할 수 없다. 
console.log(Object.keys(person)) //[ 'firstName' ]
//lastName 프로퍼티는 Enumerable의 값이 false 이므로 열거되지 않는다 

//[[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다. 
person.lastName = 'Kim';
console.log(person.lastName) //Lee
//lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다 

//[[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다 
delete person.lastName;
console.log(person.lastName); //Lee, 삭제를 해도 에러는 발생하지 않고 무시된다. 