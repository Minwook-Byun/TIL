// 예제 34-09
//유사 배열 객체
const 유사배열 = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
};

// 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다 
for (let i = 0; i < 유사배열.length; i++) {
    console.log(유사배열[i])
    //1
    // 2
    // 3
}
