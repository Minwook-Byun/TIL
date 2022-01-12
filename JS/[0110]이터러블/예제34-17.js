// 예제 34-17
const fiboFunc = function(max){
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
    return { 
        [Symbol.iterator]() {return this;},
        // next 메서드는 이터레이터 리절트 객체를 반환
        next() {
            [pre, cur] = [cur, cur + pre];
            return { value: cur, done: cur >= max };
        }
    };
};

// iter는 이터러블이면서 이터레이터다.
let iter = fiboFunc(10);

// iter은 이터러블이므로 for...of 문으로 순회할 수 있다.
for( const num of iter ){
    console.log(num);
}

iter = fiboFunc(10);

console.log(iter.next()); //{ value: 1, done : false }
console.log(iter.next()); //{ value: 2, done: false }
console.log(iter.next()); //{ value: 3, done: false }
console.log(iter.next()); //{ value: 5, done: false }
console.log(iter.next()); //{ value: 8, done: false }
console.log(iter.next()); //{ value: 13, done: true }