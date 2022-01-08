// 예제 27-114
const values = [1,2,3,4,5,6];

const average = values.reduce((acc, cur, i, { length }) => {
    //마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다 
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0)
// ??????? length를 감싸지 않으면 21이되는데(합) 왜 그럴까? 
console.log(average) //3.5

// 예제 27-117
const 카페메뉴 = ['아메리카노','카페라떼','아메리카노','카페라떼','아메리카노'];

const count = 카페메뉴.reduce((acc,cur) => {
    //첫번째 순회 시 acc는 초기값인 {}이고 cur은 첫 번째 요소인 아메리카노 
    // 초기값으로 전달 받은 빈 객체에 요소값은 cur를 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다
    // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다 
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {})

console.log(count) //{ '아메리카노': 3, '카페라떼': 2 }


