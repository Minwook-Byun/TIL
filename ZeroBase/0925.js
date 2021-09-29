function printAge(n) {
    let answer;
    if (n >= 1 && n <= 19) {
        answer = "미성년자";
    } else if (n >= 20 && n <= 64) {
        answer = "성인";
    } else if (n > 64 && n <= 120) {
        answer = "노인";
    } else {
        answer = "출력할 수 없습니다";
    }

    return answer;
}

console.log(printAge(0)); // 출력할 수 없습니다
console.log(printAge(10)); // 미성년자
console.log(printAge(20)); // 성인
console.log(printAge(64)); // 성인
console.log(printAge(65)); // 노인
console.log(printAge(120)); // 노인
console.log(printAge(121)); // 출력할 수 없습니다

// 마지막까지 else if문을 쓰려다가 시간이 오래걸렸다. 마지막은 else로 끝날 수 있도록 조건 설계를 잘하고 들어가자! 

function waterMelon(n) {
    let answer = '';
    let i;
    for (i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer += '수';
        } else {
            answer += '박';
        }
    }
    return answer;
}

console.log(waterMelon(3)); // 수박수
console.log(waterMelon(4)); // 수박수박


function uniqArray(array) {
    return array.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
}

console.log(uniqArray([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// for(i=1; i < array.length; i++){
//     if(array[i]===array[i-1]){
//         continue
//     }else{
//         answer.push(array[i])
//     }
// }


// 교집합
function intersect(a, b) {
    let answer = a.filter(elem => b.includes(elem));
    return answer;
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersect([1, 4, 7], [2])); // []

// 합집합
function sum(a, b) {
    let newSet = [...new Set([...a, ...b])];
    let answer = newSet.sort();
    return answer;
  }

console.log(sum([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(sum([1, 4, 7], [2])); // [1, 2, 4, 7]
