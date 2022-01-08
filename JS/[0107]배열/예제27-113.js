// 예제 27-113
const 음절 = ['자','바','스','립','트','딥','다','이','브']
const 문장 = 음절.reduce((acc, cur, index, arr) => acc + cur, '결과는 : ')
console.log(문장) //결과는 : 자바스립트딥다이브

