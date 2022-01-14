//예제 48-16
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다
import { pi as PI, square as SQ, Person as Pe} from './예제 48-12.mjs';

console.log(PI*3); //9.42477796076938
console.log(SQ(45)); //2025
console.log(new Pe('보라미')); //Person { name: '보라미' }

