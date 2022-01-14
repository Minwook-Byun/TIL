//예제 48-02
// foo.js
// x 변수는 전역 변수이다 
var x = 'foo';
console.log(window.x);

// 예제 48-03
// bar.js 
// x변수는 전역 변수다. foo.js에 선언한 전역 변수 x와 중복된 선언이다. 
var x = 'bar';

//foo.js에서 선언한 전역 변수 x의 값이 재할당되었다. 
console.log(window.x);
