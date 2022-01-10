// 예제 35-14
var origin = [1,2];
var copy = origin.slice();

console.log(copy); //[ 1, 2 ]
console.log(copy === origin); //false

// 예제 35-15
const 찐 = [9, 10];
const 카피 = [...찐];

console.log(카피); //[ 9, 10 ]
console.log(카피 === 찐); //false