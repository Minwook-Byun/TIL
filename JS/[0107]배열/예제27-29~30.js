const arr = [1,2,3];

// 배열 요소의 삭제 
delete arr[1];
console.log(arr); //[ 1, <1 empty item>, 3 ]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다 
console.log(arr.length) //3


//예제 27-40
const 제대로지워보자 = [1,2,3,4,5];

//Array.prototype.splice(삭제를 시작할 index, 삭제할 요소 수)
제대로지워보자.splice(1,1);
console.log(제대로지워보자); //[ 1, 3, 4, 5 ]

//length도 갱신
console.log(제대로지워보자.length); //4

