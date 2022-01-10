// 예제 35-11
// ES5
var arr1 = [1, 2]
var arr2 = [3, 4];

// 세 번째 인수 arr2를 해체하여 전달
// 그렇지 않으면 arr1 arr2 배열 자체가 추가된다 
arr1.splice(1, 0, arr2);
console.log(arr1); //[ 1, [ 3, 4 ], 2 ]

// 예제 35-12
const arr3 = [1, 2];
const arr4 = [3, 4];

Array.prototype.splice.apply(arr3, [1,0].concat(arr2));
console.log(arr3) //[ 1, 3, 4, 2 ]

// 예제 35-13
// ES6
const arrES6_1 = [1,4];
const arrES6_2 = [2,3];

arrES6_1.splice(1,0, ...arrES6_2);
console.log(arrES6_1) 
