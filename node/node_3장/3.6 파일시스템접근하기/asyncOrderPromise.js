const fs = require('fs').promises;

console.log('시작');
fs.readFile('./readme2.txt')
.then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt')
})
.then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
})
.catch((err) => {
    console.error(err);
})

// 시작
// 1번 동기처리 테스트
// 2번 동기처리 테스트
// 3번 동기처리 테스트
// 끝