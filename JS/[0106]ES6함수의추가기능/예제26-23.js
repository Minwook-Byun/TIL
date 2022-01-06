// 예제 26-23
// const Foo = () => {};
// 화사표 함수는 생성자 함수로서 호출할 수 없다
// new Foo(); //TypeError: Foo is not a constructor

// 예제 26-24
const Foo = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다 
Foo.hasOwnProperty('prototype'); // false

function normal(a,a) { return a + a };
console.log( normal(1,2) ); //4

const arrow = (a,a) => {a+a};
//SyntaxError: Duplicate parameter name not allowed in this context

