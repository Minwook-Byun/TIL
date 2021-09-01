const Timer = document.querySelector("#clock")

function EveTimer(){
    const Eve = new Date(2021, 11, 24, 00, 00, 00);
    const now = new Date();
    const gapSeconds = parseInt((Eve - now)/1000);
    
    const minitues = Math.floor(gapSeconds/60);
    const DdaySeconds = String(gapSeconds % 60).padStart(2,"0"); //이브까지 남은 초 
    const DdayMinitues = String(minitues % 60).padStart(2,"0");// 이브까지 남은 분
    
    const hours = Math.floor(minitues/60);
    const DdayHours = String(hours % 24).padStart(2,"0"); // 이브까지 남은 시간
    
    
    const days = Math.floor(hours/24);
    const DdayDays = days; // 이브까지 남은 날짜 

    console.log(Timer);
    Timer.innerHTML = `크리스마스 이브까지 ${DdayDays}일 ${DdayHours}시 ${DdayMinitues}분 ${DdaySeconds}초 남았습니다.`
}


setInterval(EveTimer,1000);


// ==========TIL==========
// 왜 정지되어 있을까? 저 선언문들을, 특히 now를 밖에서 선언해주니 계속 정지해 있었다. 
// setInterval의 scope가 now까지도 잡아주어야 한다. 
// 개선할 점! 저렇게 const const 남발해야 하나? 변수를 저렇게 많이 선언해야 했었나? 




