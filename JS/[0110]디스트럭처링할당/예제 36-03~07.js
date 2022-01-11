
// 예제 36-03
const [메뉴1, 메뉴2, 메뉴3] = ['아아','쇼콜라라떼', '홍시라떼'];

// 예제 36-04
// const [error1, error2]; 
//SyntaxError: Missing initializer in destructuring declaration

// 예제 36-06
const [a,b] = [1,2]
console.log(a,b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e,f,g] = [1,2,3,4,5,6,7,8];
console.log(e,f); //1 2

// 예제 36-07
// 기본값
const [나,너, 짜장면='보통'] = ['짬뽕', '탕수육']
console.log(나,너,짜장면) //짬뽕 탕수육 보통

// 예제 36-09
// Rest요소
const [정상메뉴, ...비정상메뉴] = ['아아','쇼콜라라떼', '홍시라떼','오렌지라떼'];
console.log(정상메뉴, 비정상메뉴);
//아아 [ '쇼콜라라떼', '홍시라떼', '오렌지라떼' ]
