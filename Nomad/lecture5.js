const backgoruond = document.querySelector("body");
const backWidth = window.innerWidth;
// console.log(outfuc)

function colorController() {
    // const infunc = window.innerWidth;
    // console.log(infunc)
    if (backWidth <= 300) {
        backgoruond.classList.remove('desktop-size', 'tablet-size')
        backgoruond.classList.add('mobile-size');
    } else if (backWidth > 300 && backWidth <= 900) {
        backgoruond.classList.remove('mobile-size', 'desktop-size');
        backgoruond.classList.add('tablet-size');
    } else if (backWidth > 900) {
        backgoruond.classList.remove('tablet-szie', 'mobile-size');
        backgoruond.classList.add('desktop-size');
    }

}

window.addEventListener('resize', colorController)

// window.onload =()=>{

// 콘솔로 열심히 찍어봤다. 함수 바깥에서 선언된 outfuc의 경우에는 resize를 계속하더라도 계속 150으로 초기 innerwidth값이 
// 유지가 된다. 반면 함수 안에서 선언된 infuc의 경우에는 resize를 할 때마다 그에 맞춰서 152 155 160씩 등으로 움직인다. 
// 변하지 말아야 할 값은 함수 바깥에서 선언하고, 변해야 하는 값은 함수 내에서 선언해주기! 