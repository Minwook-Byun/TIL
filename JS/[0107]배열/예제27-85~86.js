// 예제 27-85
const flatTest = [1,[2,3,4,5]].flat(); 
console.log(flatTest); //[ 1, 2, 3, 4, 5 ]

// 예제 27-86
// 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1이다 
const one = [1,[2,[3,[4]]]].flat();
console.log(one); //[ 1, 2, [ 3, [ 4 ] ] ]
const _one = [1,[2,[3,[4]]]].flat(1);
console.log(_one); //[ 1, 2, [ 3, [ 4 ] ] ]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단께 깊이까지 평탄화
const two = [1,[2,[3,[4]]]].flat(2);
console.log('two:', two); //two: [ 1, 2, 3, [ 4 ] ]
//const one = [1,[2,[3,[4]]]].flat().flat()과 동일하다 

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열을 모두 평탄화한다
const Infi = [1,[2,[3,[4]]]].flat(Infinity);
console.log('infinity: ', Infi); //infinity:  [ 1, 2, 3, 4 ]


