// 예제 34-05
// 배열은 이터러블 프로토콜을 준수한 이터러블 
const 보람카페메뉴 = ['오렌지핫초코','아메리카노','카페라떼','민트초코아인슈페너', '홍시바닐라라떼']

// Symbol.iterator 메서드는 이터레이터를 반환 
const iterator = 보람카페메뉴[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다
console.log('next' in iterator); //true

//예제 34-06
// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: '오렌지핫초코', done: false }
// { value: '아메리카노', done: false }
// { value: '카페라떼', done: false }
// { value: '민트초코아인슈페너', done: false }
// { value: '홍시바닐라라떼', done: false }
// { value: undefined, done: true }
