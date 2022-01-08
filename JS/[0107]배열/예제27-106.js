// 예제 27-106
const 디플레전가격 = [1000, 2500, 5000]
// map 메서든느 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다 
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다 
const 디플레후가격 = 디플레전가격.map(item => Math.sqrt(item));
//위 코드는 다음과 같다 
// const 디플레후가격 = 디플레전가격.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다 
console.log(디플레후가격) //[ 1200, 3000, 6000 ]
// map 메서드는 원본 배열을 변경하지 않는다 
console.log(디플레전가격) //[ 1000, 2500, 5000 ]

// 예제 27-107
// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다 

디플레전가격.map((item, index, arr) => {
    console.log(`요소값:${item}, 인덱스:${index}, this:${JSON.stringify(arr)}`)
    return item
})
// 요소값:1000, 인덱스:0, this:[1000,2500,5000]
// 요소값:2500, 인덱스:1, this:[1000,2500,5000]
// 요소값:5000, 인덱스:2, this:[1000,2500,5000]

// 예제 27-109
class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        console.log('add내의 this는', this); // 화살표 함수 내부에서 this를 참조하면 상위 스코프 this참조
        //add내의 this는 Prefixer  prefix: '-webkit-' }
        return arr.map((item)=>(this.prefix + item))
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// [ '-webkit-transition', '-webkit-user-select' ]

