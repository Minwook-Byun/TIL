// 예제 35-22
// 스프레드 프로퍼티 
// 객체 복사 (얕은 복사)

const obj = { x : 10, y : 10 };
const copy = {... obj};
console.log(copy); //{ x: 10, y: 10 }
console.log(obj === copy); //false

// 예제 35-24
// 객체 병합 
const merged = { x : 10, y : 10, ...{z: 10} };
console.log(merged); //{ x: 10, y: 10, z: 10 }

const _merged = {...{x:1, y:100}, ...{y:2, z:3}}
console.log(_merged); //{ x: 1, y: 2, z: 3 }

// 특정 프로퍼티 변경 
const _changed = {...{x:1, y:2}, y:100};
// changed = {... {x:1, y:2}, ...{y:100}}
console.log(_changed); //{ x: 1, y: 100 }

// 프로퍼티 추가 
const _add = {...{x:1, y:2}, z:10};
console.log(_add); 