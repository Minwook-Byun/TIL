// 예제 34-14
const fiboFunc = function (max) {
    let [pre, cur] = [0, 1];

    //Symbol.iterator 메서드를 구현한 이터러블을 반환한다
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {
                        value: cur,
                        done: cur >= max
                    };
                }
            };
        }
    };
};

// 이터러블을 반환하는 함수의 수열의 최대값을 인수로 전달하며 호출
// fiboFunc(100)은 이터러블을 반환
for (const num of fiboFunc(100)) {
    console.log(num);
    //     1
    // 2
    // 3
    // 5
    // 8
    // 13
    // 21
    // 34
    // 55
    // 89
}

// 예제 34-15
// fiboFunc 함수는 이터러블을 반환
const iterable = fiboFunc(10);
// 이터러블의 Symbol.iterator() 메서드를 이터레이터를 반환
const iterator = iterable[Symbol.iterator]();

console.log('1번 next', iterator.next());
console.log('2번 next', iterator.next());
console.log('3번 next', iterator.next());
console.log('4번 next', iterator.next());
console.log('5번 next', iterator.next());
console.log('6번 next', iterator.next());
console.log('7번 next', iterator.next());
// 1번 next { value: 1, done: false }
// 2번 next { value: 2, done: false }
// 3번 next { value: 3, done: false }
// 4번 next { value: 5, done: false }
// 5번 next { value: 8, done: false }
// 6번 next { value: 13, done: true }
// 7번 next { value: 21, done: true }


// 예제 34-16
// 이터러블이면서 이터레이터인 객체
// 이터레이터를 반환하는 Symbol.iterator 메서드와 이터레이션 리절트 객체를 반환하는 next 메서드를 소유
// {
//     [Symbol.iterator]() {
//         return this;
//     },
//     next() {
//         return { value: any, done: boolean}
//     }
// }

