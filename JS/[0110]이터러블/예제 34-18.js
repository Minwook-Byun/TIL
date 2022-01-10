// 예제 34-18
// 무한 이터러블을 생성하는 함수 
const fiboFunc = function () { 
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {return this;},
        next() {
            [pre, cur] = [cur, pre + cur];
            // 무한을 구현해야 하므로 done 프로퍼티를 생략한다 
            return { value : cur };
        }
    }
}

//fiboFunc 함수는 무한 이터러블을 생성한다
for (const num of fiboFunc(10)) {
    if (num > 100) break;
    console.log(num); // 1 ... 89
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득
const [ f1, f2, f3 ] = fiboFunc();
console.log(f1, f2, f3); //1 2 3
