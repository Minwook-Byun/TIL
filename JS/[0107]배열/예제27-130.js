// 예제 27-130
const menu = [
            {id: 1, name: '민트초코쇼콜라라떼'},
            {id: 2, name: '민트초코바닐라라떼'},
            {id: 3, name: '민트초코아인슈페너'},
            {id: 4, name: '아인슈페너'},
            {id: 5, name: '바닐라라떼'},
        ];
// name이 아인슈페너인 요소를 반환. find는 배열이 아니라 요소를 반환
console.log(menu.find(menu => menu.name === '아인슈페너'));
//{ id: 4, name: '아인슈페너' }

// 예제 27-131
// filter 메서드는 배열을 반환
filterRes = [1,2,2,2,2,3,4,4].filter(item => item === 2);
console.log(filterRes); //[ 2, 2, 2, 2 ]

// find 메서드는 요소를 반환
findRes = [1,2,2,2,2,3,4,4].find(item => item === 2);
console.log(findRes); //2

