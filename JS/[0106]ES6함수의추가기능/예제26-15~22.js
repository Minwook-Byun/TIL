//concise body
const power = x => x ** 2;
console.log(power(2)); //4

//위 표현은 다음과 동일하다 
// block body
const _power = x => {
    return x ** 2;
};

// 예제 26-16
const arrow = () => const x = 1;
//위 표현은 다음과 같이 해석된다 
const arrow = () => { return const x = 1}

// 예제 26-17
const arrow = () => {
    const x = 1;
};

// 예제 26-18
const create = (id, content) => ({
    id,
    content
});
console.log(create('boram의 아이디', 'javascript'));
{ id: 'boram의 아이디', content: 'javascript' }

//위 표현은 다음과 동일하다 
const create = (id, content) => {
    return {
        id,
        content
    };
};


// 예제 26-19
//{id, content}를 함수 몸체 내의 쉼표 연산자문으로 해석한다. 
const _create = (id, content) => {
    id,
    content
};
console.log(_create('보람의 아이디', '중괄호로 감싸지 않은')) //undefined

// 예제 26-20
const sum = (a, b) => {
    const result = a + b;
    return result;
};

//예제 26- 21
const person = (name => ({
    sayHi() {
        return `Hi! ${name}`;
    }
}))('Boram');

console.log(person.sayHi()); //Hi! Boram

//예제 26-22
//ES5
[1, 2, 3].map(function (v) {
    return v * 2;
});

//ES6
[1,2,3].map(v => v * 2); // [2, 4, 6]
