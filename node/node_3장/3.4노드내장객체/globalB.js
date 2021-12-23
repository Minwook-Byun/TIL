const A = require('./globalA')

global.message = '안녕~ 이제는 안녕~~'
console.log(A())
// 예측 : 위에서 require로 가져온 A를 실행하면 A에서 global.message 가 실행되서 msg 출력!