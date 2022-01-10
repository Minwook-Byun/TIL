// 예제 34-12
// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
    // symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수하도록
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1]; // 디스트럭처링 할당
        const max = 10; // 수열의 최대값

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
        // next 메서드는 이터레이터 리절트 객체를 반환해야 한다 

        return {
            next() {
                [pre, cur] = [pre, pre + cur]; // 디스트럭처링 할당
                //이터레이터 리절트 객체를 반환한다 
                return { value : cur , done : cur >= max };
            }
        };
    }
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다 
for (const num of fibonacci) {
    console.log(num);
}


// 예제 34-13
// 이터러블은 스프레드 문법의 대상이 될 수 있다
const arr = [...fibonacci];
console.log(arr);