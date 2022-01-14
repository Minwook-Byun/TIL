//예제 48-13
// 같은 폴대 내의 lib.js 모듈을 export한 식별자 이름으로 import한다 
// ESM의 경우 파일 확장자를 생략할 수 없다 
import { pi, square, Person } from './예제 48-12.mjs'

console.log(pi); //3.141592653589793
console.log(square(10)); //100
console.log(new Person('boram')); //Person { name: 'boram' }
