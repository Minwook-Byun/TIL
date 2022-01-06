//화살표 함수는 상위 스코프의 this를 참조한다 
() => this.x;

//익명의 함수에 상위 스코프 this를 주입한다. 위 화살표 함수와 동일하게 동작
(function () {return this.x;}).bind(this);

// 예제 26-34
// 중첩함수 foo의 상위 스코프는 즉시 실행함수이다 
// 다따라서 화살표 함수 foo의 this는 상위 스코프인 즉시 실행함수의 this를 가리킨다 
(function () {
    const foo = () => console.log(this)
    foo()
}).call({
    a: 1
}) // { a: 1 }

// bar 함수는 화살표 함수를 반환한다 
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다 

(function () {
    const bar = () => () => console.log(this);
    bar()();
}).call({ a: 1 })

// 예제 26-35
const 전역함수 = () => console.log(this);
전역함수(); // window

// 예제 26-36
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다. 
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다 
const counter = {
    num:1,
    increase: () => ++this.num
};

console.log(counter.increase()); //NaN 

// 예제 26-37
window.x = 1;

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 20 })); //1



