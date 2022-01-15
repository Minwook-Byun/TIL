// any 사용의 지양과 
function add(a:number,b:number){
    return a + b;
}

// null 사용 시 해결방법 
// const x: number = null; //원래는 정상, null은 유효한 값

//해결방법 
const x: number | null = null;

const el = document.getElementById('status');
el.textContent = 'Ready';


// 해결방법
if (el){
    el.textContent = 'Ready'; //정상, null은 제외 
}
el!.textContent = 'Ready'; // 정상, el이 null이 아님을 단언 


