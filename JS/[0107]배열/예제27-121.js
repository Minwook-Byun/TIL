// 예제 27-121 중복 요소 제거 
const values = [1,2,2,3,1,3,3,4,4,5,2,5];
//순회중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소이다. 이 요소만 필터링.
const result = values.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result); //[ 1, 2, 3, 4, 5 ]

const setResult = [...new Set(values)];
console.log(setResult); //[ 1, 2, 3, 4, 5 ]
console.log(result == setResult); // false ????? 
