const newMenuIdea = ['아메리카노','아메리카노', '카페라떼','아메리카노', '카페라떼'];

// 배열 newMenuIdea에서 모든 item 요소를 제거한다. 
function 아메리카노멈춰(arr, item){
    return arr.filter(v => v!==item);
}

console.log(아메리카노멈춰(newMenuIdea,'아메리카노')); //[ '카페라떼', '카페라떼' ]

const 보람카페메뉴 = ['오렌지핫초코','아메리카노','카페라떼','민트초코아인슈페너', '홍시바닐라라떼']
console.log(보람카페메뉴.slice(1)); //[ '아메리카노', '카페라떼', '민트초코아인슈페너', '홍시바닐라라떼' ]

// 예제 27-69
// 배열의 끝에서부터 요소를 한 개 복사해서 반환
console.log(보람카페메뉴.slice(-1)); //[ '홍시바닐라라떼' ]

// 배열의 끝에서부터 요소를 두 개 복사해 반환한다 
console.log(보람카페메뉴.slice(-2)) //[ '민트초코아인슈페너', '홍시바닐라라떼' ]

const 더보람카페 = [
    {id:1, content: '오렌지핫초코', delicious: false},
    {id:2, content: '민트초코아인슈페너', delicious: false},
    {id:3, content: '홍시바닐라라떼', delicious: false}
];

//얕은 복사 
const _더보람카페 = 더보람카페.slice();
// const _더보람카페 = [...더보람카페]

//_더보람카페와 더보람카페는 참조값이 다른 별개의 객체
console.log(_더보람카페 === 더보람카페); //false

// 배열 요소의 참조 값이 같다. 즉, 얕은 복사되었다
console.log(_더보람카페[0] === 더보람카페[0]) //true


function sum() {
    //유사 배열 객체를 배열로 전환(ES5)
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr); //[ 1, 2, 3 ]

    return arr.reduce((per,cur)=> {
        return per + cur;
    }, 0);
}

console.log(sum(1,2,3)); //6


function sumFrom() {
    const arr = Array.from(arguments);
    console.log(arr); //[ '강', '아', '지' ]

    return arr.reduce((pre,cur)=> pre+cur, '결과는 : ');
}

console.log(sumFrom('강','아','지')); //결과는 : 강아지

function sumSpread() {
    // 이터러블을 배열로 변환(ES6 스프레드 문법)
    const arr = [...arguments];
    console.log(arr); //[ 1, 2, 3 ]
    return arr.reduce((pre,cur)=> pre+cur,0);
}

console.log(sum(1,2,3)) //6


