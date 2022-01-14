//예제 48-15
// lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import한다 
import * as lib from './예제 48-12.mjs'

console.log(lib.pi); //3.141592653589793
console.log(lib.square(123)); //15129
console.log(new lib.Person('boram')); //Person { name: 'boram' }
