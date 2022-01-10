// 예제 35-16
// ES5
function sum() {
    // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환 
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1,2,3,4)) //10


// 예제 35-18
function sumSpread() {
    // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sumSpread(1,2,3,4)) // 10


// 예제 35-19
// Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달 받는다
const usingRsetSum = (...args) => args.reduce((pre, cur) => pre+cur,0);
console.log(usingRsetSum(1,2,3,4,5,6)) // 21

