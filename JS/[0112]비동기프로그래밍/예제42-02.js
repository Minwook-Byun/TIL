//lazy 함수는 일정 시간 경과 후에 콜백하수를 호출
function lazy(func, delay) {
    //Date.now()는 현재 시간을 숫자(ms)로 반환한다.
    const delayUntil = Date.now() + delay;

    //현재 시간에 delay를 더한 delayUntil이 현재 시간보다 작으면 계속 반복
    while(Date.now() < delayUntil);
    // 일정 시간(delay)이 경과한 이후에 콜백 함수(func)를 호출
    func();
}

function foo(){
    console.log('foo');
}

function bar(){
    console.log('bar');
}

lazy(foo, 3*1000); // 3초 이상 실행된다.
bar() //bar 함수는 lazy 함수의 실행이 종료된 이후에 호출되므로 3초이상 블로킹
// 3초 이후에 foo => bar 호출

