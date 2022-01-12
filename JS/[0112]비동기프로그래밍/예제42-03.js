// 예제 42-03
function foo() {
    console.log("foo");
}

function bar() {
    console.log("bar");
}

//타이머 함수 setTimeout은 일정 시간이 경과후 콜백 함수 foo를 호출
// 타이머 함수 setTimeout은 bar 함수를 블로킹 하지 않는다 

setTimeout(foo, 3*1000);
bar();
// bar 호출 -> 3초뒤 -> foo 호출
