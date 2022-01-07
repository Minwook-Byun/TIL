// 예제 27-47
const arr = [1,2];
arr[arr.length] = 3;
console.log(arr); //[ 1, 2, 3 ]


const spreadArray = ['Hankook', 'university']
// ES6 스프레드 문법 
const newArray = [...spreadArray,'of', 'foregin','sutudies']
console.log(newArray); //[ 'Hankook', 'university', 'of', 'foregin', 'sutudies' ]

