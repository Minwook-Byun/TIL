// 예제 35-03
const arr = [1,2,3];

// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용
const Max = Math.max(arr)
console.log(Max); //NaN

// 예제 35-06
// apply 함수의 두번째 인수는 apply 함수가 호출하는 함수의 인수 목록
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다
var max = Math.max.apply(null, arr); // 3

// 예제 35-07
// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 전달
// Math.max(...[1,2,3])은 Math.max(1,2,3)과 같다 
const ES6_MAX = Math.max(...arr); // 3

// 예제 35-08
// Rest 파라미터는 인수들의 목록을 배열로 전달받는다
function menu(...rest){
    console.log(rest); //[ 1, 2, 3 ]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다
menu(...[1,2,3]);
