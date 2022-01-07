const arr = [1];

arr.push(2,3,4);
console.log(arr); //[ 1, 2, 3, 4 ]
// === push 메서드는 원본 배열을 직접 변경한다===

//예제 27-41
const concatArray = arr.concat(5,6);
console.log(arr); //[ 1, 2, 3, 4 ]로 위와 동일
console.log(concatArray); //[ 1, 2, 3, 4, 5, 6 ]


