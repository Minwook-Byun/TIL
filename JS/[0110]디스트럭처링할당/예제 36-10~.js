// // 예제 36-10
// // ES5
// const myName = {
//     firstName: 'minwook',
//     lastName: 'boram'
// };

// const firstName = myName.firstName;
// const lastName = myName.lastName;

// console.log(firstName + ' ' + lastName) //minwook boram


const myName = {
    firstName: 'minwook',
    lastName: 'boram'
};

const {lastName, firstName} = myName;
console.log(firstName,lastName); //minwook boram

// 예제 36-12
const {신메뉴, 가격} = {가격:3500, 신메뉴:'americano'}
console.log(가격, 신메뉴) //3500 americano

// // 예제 36-18
// function printTodo(todo) {
//     console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
// }
// printTodo({ id:1, content:'인지과학입문', completed: false });
// //할일 인지과학입문은 비완료 상태입니다.
