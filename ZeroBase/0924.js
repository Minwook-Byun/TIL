const array = [1, 2, {}, 4];
// console.log(array);
// console.log(array[2]);

const objects = [{
        name: '멈무이'
    },
    {
        name: '야옹이'
    }
]

objects.push({
    name: '멍뭉이',
})

// 배열: 여러가지를 넣을 수 있는 자료형
// 조회하고 싶을 때는 array[i]
// 추가하고 싶을 때는 array.push
// 크기를 알고 싶을 때는 array.length 

// ==반복문==
// 시작-> 조건 -> 구문실행(t) / 끝(f) 
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// for문 + 배열
const names = ['멍뭉이', '멍멍이', '댕댕이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while 문 
let i = 0
while (i < 10) {
    console.log(i)
    i++;
    // 초기 값이 코드 블럭의 외부, 상태 변화를 나타내는 것이 안에 있도록 적는다. 
}

const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    // number는 위의 10,20...50을
    // for of 는 배열 안에 있는 것을 사용해야 할 때 사용한다. 
    console.log(number);
    // for in 도 있어서 헷갈릴 수도 있다. 
}
// 배열에 내장함수가 있기 때문에 .length를 하지 않아도 된다. 


const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy))

for (let i = 10; i <= 10; i--) {
    if (i === 2) continue;
    // continue => 그 다음거
    console.log(i);
    if (i === 5) break;
}


// hw1. 배열 합 구하는 함수
function sumOf(numbers) {
    // 배열의 총합 
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5])
console.log(result);


// hw1. 3보다 큰 숫자만 출력하는 배열 
function threePass(numbers) {
    const numarry = [];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 3) {
            continue;
        } else {
            numarry.push(numbers[i]);
        }
    }
    return numarry;
}

const _result = threePass([1, 2, 3, 4, 5,6,7,8,9]);
console.log(_result);