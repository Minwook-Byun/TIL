// const array = [1, 2, {}, 4];
// // console.log(array);
// // console.log(array[2]);

// const objects = [{
//         name: '멈무이'
//     },
//     {
//         name: '야옹이'
//     }
// ]

// objects.push({
//     name: '멍뭉이',
// })

// 배열: 여러가지를 넣을 수 있는 자료형
// 조회하고 싶을 때는 array[i]
// 추가하고 싶을 때는 array.push
// 크기를 알고 싶을 때는 array.length 

// // ==반복문==
// // 시작-> 조건 -> 구문실행(t) / 끝(f) 
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// // for문 + 배열
// const names = ['멍뭉이', '멍멍이', '댕댕이'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// while 문 
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++;
    // 초기 값이 코드 블럭의 외부, 상태 변화를 나타내는 것이 안에 있도록 적는다. 
// }

// const numbers = [10, 20, 30, 40, 50];
// for (let number of numbers) {
//     // number는 위의 10,20...50을
//     // for of 는 배열 안에 있는 것을 사용해야 할 때 사용한다. 
//     console.log(number);
//     // for in 도 있어서 헷갈릴 수도 있다. 
// }
// // 배열에 내장함수가 있기 때문에 .length를 하지 않아도 된다. 


// const doggy = {
//     name: '멍멍이',
//     sound: '멍멍',
//     age: 2
// };

// console.log(Object.keys(doggy));
// console.log(Object.values(doggy))

// for (let i = 10; i <= 10; i--) {
//     if (i === 2) continue;
//     // continue => 그 다음거
//     console.log(i);
//     if (i === 5) break;
// }


// // hw1. 배열 합 구하는 함수
// function sumOf(numbers) {
//     // 배열의 총합 
//     let sum = 0;
//     for (i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// const result = sumOf([1, 2, 3, 4, 5])
// console.log(result);


// // hw1. 3보다 큰 숫자만 출력하는 배열 
// function threePass(numbers) {
//     const numarry = [];
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] <= 3) {
//             continue;
//         } else {
//             numarry.push(numbers[i]);
//         }
//     }
//     return numarry;
// }

// const _result = threePass([1, 2, 3, 4, 5,6,7,8,9]);
// console.log(_result);
// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = n => n * n;
// const squared = array.map(square);
// const squared = array.map(n => n * n); 바로 이렇게도 가능하다. 

// console.log(squared);


// index of 
// const dogs = ['시바', '진돗개', '시고르자브종']
// const index = dogs.indexOf('진돗개');
// console.log(index); //1

// const toDo = [{
//         id: 1,
//         text: '함수배우기',
//         done: true,
//     },
//     {
//         id: 2,
//         text: '반복문 배우기',
//         done: true,
//     },
//     {
//         id: 3,
//         text: '리액트 배우기',
//         done: false,
//     },
//     {
//         id: 3,
//         text: '리덕스 배우기',
//         done: false,
//     }
// ]

// const toDoindex = toDo.find(toDoindex => toDo.id ===3);
// console.log(toDoindex);

// forEach
// for (let i=0; i<dogs.length; i++){
//     console.log(dogs[i]);
// }

// function print(hero){
//     console.log(hero);
// }

// dogs.forEach(print);



// dogs.forEach(dog=>{
//     console.log(dog);
// }) //파라미터를 넣어줘야 한다. 

// const tasksNotDone = toDo.filter(todo => todo.done === false);
// console.log(tasksNotDone);
// const tasksNotDone1 = toDo.filter(todo => todo.done);
// console.log(tasksNotDone1);
// const tasksNotDone2 = toDo.filter(todo => !todo.done);
// console.log(tasksNotDone2);


// ==shift-== 맨 앞에 있는 것을 밖으로 빼냄 
// const numbers = [10, 20, 30, 40];

// const shiftValue = numbers.shift();
// numbers.shift();
// numbers.shift();
// console.log(shiftValue);
// console.log(numbers);

// pop => 방향이 반대 
// const popValue = numbers.pop();
// numbers.pop();
// console.log(popValue);
// numbers.push(40);
// pop과 push는 짝! 

// pop과 shift는 배열 자체를 바꿔버린다 

// const arr1 = [1,2,3,4];
// const arr2 = [4,5,6];

const concated = [...arr1, ...arr2];
console.log(concated);
concated는 기존의 함수를 당연하게 건드리지 않는다. 새로운 배열을 concated에 넣는다 

join arr => 문자열로 반환한다 
const arrayJoin  = [1,2,3,4,5];
console.log(arrayJoin.join()); //1,2,3,4,5
console.log(arrayJoin.join(' ')) //1 2 3 4 5
console.log(arrayJoin.join(', ')) //1, 2, 3, 4, 5


// reduce = 배열 내에서 모든 값을 사용해서 연산을 할 때 사용한다. 
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// 0이 초기 accumulator값이 되고 current(각원소 처음에는 1), 1이 다시 accumulator, 그 다음에 current인 2가 더해지고 다음에는 반복
const sum = numbers.reduce((accumulator, current, index, array) => accumulator + current, 0);
// index는 현재 처리하고 있는 것의 index번호 

console.log(sum)

const alphabets = ['a', 'a', 'b', 'c', 'c'];

const counts = alphabets.reduce((acc, cuurnet) => {
    if (acc[cuurnet]) {
        // 존재하는지 확인을 해서 
        acc[cuurnet] += 1;
    } else {
        acc[cuurnet] = 1;
    }
    return acc;
}, {})

console.log(counts)

