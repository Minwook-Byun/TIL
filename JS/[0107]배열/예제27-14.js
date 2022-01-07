//예제 27-14

const arr = [1,2,3,4,5];

arr.length  = 3;

console.log(arr); //[ 1, 2, 3 ]

//예제 27-15
arr.length = 5;
console.log(arr); //[ 1, 2, 3, <2 empty items> ]

