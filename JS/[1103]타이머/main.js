const $input = document.querySelector('.input');
const $msg = document.querySelector('.msg');

const debounce = (callback, delay) => {
    let timerId; ///debounce는 timerId를 가억하는 클로저를 반환
    return event =>{
        // delay가 경과하기 이전에 이벤트가 발생하면 이전 타이머를 취소하고 새로운 타이머를 재설정
        // 따라서 delay보다 짧은 간격으로 이벤트가 발생하면 callback은 호출되지 않는다. 
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(callback, delay, event);
    };
};

// debounce 함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
// 300ms보다 짧은 간격으로input함수가 발생하면 debounce 함수의 콜백함수는 
// 호출되지 않다가 300ms 동안 input 이벤트가 더 이상 발생하지 않으면 한 번만 호출된다. 
$input.oninput = debounce(e=>{
    $msg.textContent = e.target.value;
},300)
