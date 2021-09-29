function double(x){
    return x*2;
}

const x = double(100);
const y = x;

// 앞 코드가 실행되기 이전에는 뒤의 코드를 실행할 수 없는 것
// 앞 뒤가 묶여 있는 것이 동기 코드이다


// 실행의 흐름을 막을 수 없는 것이 동시에 실행될 수 있는 콛, =비동기코드
// 정상적으로 비동기 코드를 만들 수 없다. 그래서 타이머를 이용

function calcValue(){
    setTimeout(()=>)