// 예제 36-01 
// ES5
var arr = [1, 2, 3]

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three);

// ES6
const destrucArry = ['아아','쇼콜라라떼','홍시라떼']
//ES6 배열 디스트럭처링 할당
// 변수 메뉴1, 메뉴2, 메뉴3를 선언하고 배열 arr을 디스트럭처링하여 할당한다
// 이때 할당의 기준은 배열의 인덱스다
const [메뉴1, 메뉴2, 메뉴3] = destrucArry;
console.log(메뉴1, 메뉴2, 메뉴3);