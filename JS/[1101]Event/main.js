// const $fruits = document.getElementById('fruits')
// const $msg = document.getElementById('msg')

// function active({ $target }) {

//     [...$fruits.children].forEach($fruits =>{
//         $fruits.classList.toggle('active', $fruit === $target);
//         $msg.innerHTML = $target.id;
//     });
// }

// // document.getElementById('a').onclick = active;
// // document.getElementById('b').onclick = active;
// // document.getElementById('c').onclick = active;

// $fruits.onclick = active; //상위 요소는 하위 요소의 이벤트를 캐치!

// document.querySelector('.container').onclick = ({ target }) => {
//  if(!target.matches('.container>button')) return
//  target.style.color = 'red';
// };

// document.querySelector('.btn2').onclick = e => {
//     e.stopPropagation(); // 전파 중다 ㄴ
//     e.target.style.color = 'blue';
//    };

// const $button1 = document.querySelector('.btn1');
// const $button2 = document.querySelector('.btn2');

// $button1.addEventListener('click', function(e){
//     //this는 이벤트를 바인딩한 DOM요소를 가리킨다
//     console.log(`this는 ${this}`);
//     console.log(this === e.currentTarget)
// })

// $button2.addEventListener('click',(e)=>{
//     console.log(`this는 ${this}`)
//     console.log(this === e.currentTarget)
// })

class App{
    constructor(){
        this.$button = document.querySelector('.btn1');
        this.count = 0;

        this.$button.onclick = this.increase;
    }

    increase(){
        this.$button.innerHTML = ++this.count;
    }
}

new App();

