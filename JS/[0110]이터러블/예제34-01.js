// // iterable, 순회가능한 자료구조 
// [Symbol.iterator]() {}

// // iterator, 이터러블의 요소를 탐색하기 위한 포인터 
// {
//     next() {
//         return {
//             // 이터레이터 리절트 객체
//             value: any,
//             done: boolean
//             //
//         }
//     }
// }

//예제 34-01
const 이터러블 = v => v !== null && typeof v[Symbol.iterator] === 'function';
// 배열 문자열 map Set 등은 이터러블이다 
console.log(이터러블([])); //T
console.log(이터러블('보람 카페~')); //T
console.log(이터러블(new Set())); //T
console.log(이터러블(new Map())); //T
console.log(이터러블({})); // F

//예제 34-02
const 보람카페메뉴 = ['오렌지핫초코','아메리카노','카페라떼','민트초코아인슈페너', '홍시바닐라라떼']

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속 받는 메서드다
console.log(Symbol.iterator in 보람카페메뉴); // True

// 이터러블인 배열은 for ... of 로 순회가능
for (const item in 보람카페메뉴){
    console.log(item);
}
//0
// 1
// 2
// 3
// 4

// 이터러블인 배열은 스프레드 문법의 대상으로 사용 가능 
console.log([...보람카페메뉴])
//[ '오렌지핫초코', '아메리카노', '카페라떼', '민트초코아인슈페너', '홍시바닐라라떼' ]

const [오늘의커피, ...나머지메뉴] = 보람카페메뉴;
console.log(오늘의커피) //오렌지핫초코
console.log(나머지메뉴) //[ '아메리카노', '카페라떼', '민트초코아인슈페너', '홍시바닐라라떼' ]


