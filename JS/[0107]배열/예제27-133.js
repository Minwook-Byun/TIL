// 예제27-133
const arr = ['안녕','flat'];

//map과 flat을 순차적으로 실행
console.log(arr.map( x => x.split('')).flat());
//[ '안', '녕', 'f', 'l', 'a', 't' ]

//flatMap은 map을 통해 생성된 새로운 배열을 평탄화
console.log(arr.flatMap(x=>x.split('')))
//[ '안', '녕', 'f', 'l', 'a', 't' ]

// 예제27-134
console.log(arr.flatMap((str, index) => [index, [str, str.length]]));
//[ 0, [ '안녕', 2 ], 1, [ 'flat', 4 ] ]

