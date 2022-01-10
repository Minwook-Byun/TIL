// 예제 34-03
const obj = {
    '메뉴': '아메리카노',
    '가격': 2500
};

//일반 객체는 Symbol.iterator 메서드를 구현하거나 상속 받지 않는다 
//따라서 객체는 이터러블이 아니다 

console.log(Symbol.iterator in obj) //false

for(const item of obj){
    // console.log(item); //TypeError: obj is not iterable
}

//이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다 
const [a, b] = obj; //TypeError: obj is not iterable

// 예제 34-04 
console.log({...obj}); //{ '메뉴': '아메리카노', '가격': 2500 }

