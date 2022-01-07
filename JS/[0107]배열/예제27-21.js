// 예제 27-21
const arr = new Array(100);

console.log(arr); //`[ <100 empty items> ]
console.log(arr.length); //100

Array.of(1);
Array.of(1,2,3);

// === 이렇게는 못 쓴다 ===
// const CS과목 = [];
// CS과목.of('컴퓨터구조')
// console.log(CS과목)
// TypeError: CS과목.of is not a function


//예제 27-28
// 유사 배열 객체를 변환하여 배열을 생성 
Array.from({length: 2, 0:'a', 1:'b'}); //[ 'a', 'b' ]

// 이터러블을 변환하여 배열을 생성. 문자열은 이터러블
console.log(Array.from('Helloooo'));
// [
//     'H', 'e', 'l',
//     'l', 'o', 'o',
//     'o', 'o'
//   ]
  

// 예제 27-29
// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다
console.log(Array.from({length:3})); //[ undefined, undefined, undefined ]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환 
console.log(Array.from({length:3}, (_,i)=>i)); //[ 0, 1, 2 ]


