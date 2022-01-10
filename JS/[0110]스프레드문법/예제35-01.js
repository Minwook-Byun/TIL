
// 예제 35-01 
//...[1,2,3]은 [1,2,3]을 개별 요소로 분리한다 
console.log(...[1,2,3]); //1 2 3

// 문자열은 이터러블이다 
console.log(...'나를분리해봥!') //나 를 분 리 해 봥 !

// Map Set은 이터러블이다 
console.log(...new Map([['아메리카노','2500'], ['카페라떼', '3500']])); 
//[ '아메리카노', '2500' ] [ '카페라떼', '3500' ]
console.log(...new Set([1,2,3])); //1 2 3

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{a:1, b:2})
//TypeError: Found non-callable @@iterator

// 예제 35-02
// const list = ...[1,2,3]; //SyntaxError: Unexpected token '...'


