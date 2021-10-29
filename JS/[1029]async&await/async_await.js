// 제너레이터 함수 선언문
function* getDecFunc() {
    yield 1
}

const { promisify } = require("util");

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1
}

// 제너레이터 매서드
const obj = {
    * getObjMethod(){
        yield 1
    }
};

// 제너레이터 클래스 메서드 
class MyClass { 
    *getClsMethod(){
        yield 1 
    }
}

function* getFunc(){
    yield 1
    yield 2
    yield 3
}

const generator = getFunc();

console.log(Symbol.iterator in generator); // true
console.log('next' in generator); //true

function* getFunc(){
    try{
        yield 1
        yield 2
        yield 3
    }catch(e){
        console.error(e);
    }
}
const generator = getFunc();
console.log(generator.next());
console.log(generator.throw('에러났다!!!!!!!!!!!!!!!!'))


function* getFunc(){
    yield 1
    yield 2
    yield 3
}
const generator = getFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* genFuc(){
    const x = yield 1;
    const y = yield(x+10);
    return x + y; 
}

const generator = genFuc(0);

let res = generator.next();
console.log(res); //{ value: 1, done: false }

res = generator.next(10);
console.log(res); //{ value: 20, done: false }

res = generator.next(20);
console.log(res); //{ value: 30, done: true }

const infiniteF = (function () {
    let [pre, cur] = [0,1];

    return {
        [Symbol.iterator]() {return this;},
        next() {
            [pre,cur] = [cur, pre + cur];
            return {value : cur};
        }
    };
}());

for (const num of infiniteF) {
    if (num > 1000) break;
    console.log(num);
}

const infitFibo = (function* () {
    let [pre, cur] = [0, 1];
    while (true) {
        [pre, cur] = [cur, cur + pre];
        yield cur;
    }
}());

for (const num of infitFibo){
    if(num>1000) break;
    console.log(num)
}

const { response } = require('express');
const fetch = require('node-fetch');

const async = generatorFunc => {
    const generator = generatorFunc();

    const onResolved = arg => {
        const result = generator.next(arg);

        return result.done ?
            result.value :
            result.value.then(res => onResolved(res));

    }
    return onResolved;
}

(async(function * fetchTodo(){
    const url = 'https://jsonplaceholder.typicode.com/post/1';

    const res = yield fetch(url);
    const todo = yield response.json();
    console.log(todo);
})())


const fetch = require('node-fetch');

async function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/post/1';

    const response = await fetch(url); // const response = yield fetch(url);
    const todo = await response.json(); // const todo = yield response.json(); 
    console.log(todo);
}

fetchTodo()

// 한수 선언문
async function foo(n) {return n;}
foo(1).then(v=> console.log(v)) //1

// async 함수 표현식 
const bar = async function(n) {return n};
bar(2).then(v => console.log(v)); //2

// async 화살표 함수 
const baz = async n => n;
baz(3).then(v=>console.log(v)) //3

// async 메서드 
const obj = {
    async foo(n) {return n;}
};
obj.foo(4).then(v => console.log(v));

// async 클래스 메서드 
class MyClass {
    async bar(n) {return n;}
}
const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v)) //5

const fetch = require('node-fetch');

const getGitUserName = async id => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const name = await res.json();
    console.log(name);
};

getGitUserName('ungmo2');

async function foo() {
    const a = await new Promise(resolve => setTimeout(()=>resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(()=>resolve(2), 2000));
    const c = await new Promise(resolve => setTimeout(()=>resolve(3), 1000));

    console.log([a,b,c]); //[ 1, 2, 3 ]
}

foo();


async function foo() {
    const res = await Promise.all([
        new Promise(resolve => setTimeout(()=>resolve(1), 3000)),
        new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
        new Promise(resolve => setTimeout(()=>resolve(3), 1000))
    ])

    console.log(res); //[ 1, 2, 3 ]
}

foo();

async function bar(n) {
    const a = await new Promise(resolve => setTimeout(()=>resolve(n), 3000));
    const b = await new Promise(resolve => setTimeout(()=>resolve(a+1), 2000));
    const c = await new Promise(resolve => setTimeout(()=>resolve(b+1), 1000))
    console.log([a,b,c]); //[ 1, 2, 3 ]
}

bar(1);

try{
    setTimeout(()=>{ throw new Error('에러났어요~~~~~!');}, 1000);
} catch(e){
    console.error(e);
}

const fetch = require('node-fetch');
const foo = async () => {
    try{
        const wrongUrl = 'https://잘못된url';

        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
    } catch(err){
        console.error(err);
    }
};

foo();

const fetch = require('node-fetch');

const foo = async() => {
    const wrongUrl = 'https://잘못된url';
    
    const response = await fetch(wrongUrl);
    const data = await response.json();
    return data;
};

foo()
.then(console.log)
.catch(console.error) // TyepError : Failed to fetch

