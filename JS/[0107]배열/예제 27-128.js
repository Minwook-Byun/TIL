// 예제 27-128

// 배열 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인 
console.log([5, 10, 15].some(item => item > 10)); //true

// 배열 요소 중 0보다 작은 요소가 1개 이상 존재하는지 확인 
console.log([5, 10, 15].some(item => item < 0)); //false

// 배열 요소 중 민트를 포함하는 게 하나 이상인지 확인 
console.log(['민트초코프라프치노','카페라떼','아메리카노'].some(item => item.includes('민트'))); //true

// 빈 배열인 경우 false를 반환 
console.log([].some(item => item === banana)) 


