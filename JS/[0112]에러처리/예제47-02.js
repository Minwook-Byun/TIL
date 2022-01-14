//예제 47-02 
console.log('시~~작');

try{
    foo();
}catch (err){
    console.log('에러 발~생!',err);
    //에러 발~생! ReferenceError: foo is not defined
}
// 발생한 에러에 적절한 대응을 하면 프로그램이 강제 종료되지 않음 
console.log('끝!')

// 예제 47-03
// DOM에 button 요소가 존재하지 않으면 querySelector 메서드는 에러를 발생시키지 않고 null을 반환
const $button = document.querySelector('btn'); //null


// 예제 47-05
// DOM에 button 요소가 존재하는 경우 querySelector 메서드는 에러를 발생시키지 않고 null을 반환
const $btn = document.querySelector('button');
$btn?.classList.add('disabled');
