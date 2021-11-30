// 함수는 무명의 리터럴로 생성할 수 있다
// 함수는 변수에 저장할 수 있다. 

const increase = function(num){
    return ++num;
}

const decrease = function(num){
    return --num;
}

//함수는 객체에 저장할 수 있다
const predic = {
    increase,
    decrease,
}

// 함수의 매개변수에 전달할 수 있다.
function makeCounter(predic){
    let num = 0;

    // 함수의 반환값으로 사용할 수 있다
    return function(){
        num = predic(num);
        return num;
    }
}

//함수는 매개변수에게 함수를 전달할 수 있다. 
const increaser = makeCounter(predic.increase);
console.log(increaser())

function multiply(x,y) {
    // 이터레이터 
    const iterator = arguments[Symbol.iterator]();

    // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순환
    console.log(iterator.next()); //{ value: 1, done: false }
    console.log(iterator.next()); //{ value: 2, done: false }
    console.log(iterator.next()); //{ value: 3, done: false }
    console.log(iterator.next()); //{ value: undefined, done: true }
    return x * y; 
}

multiply(1,2,3)

function sum(){
    let  res = 0;
    //arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i]
    }
    return res
}
console.log(sum()) //0
console.log(sum(1,2)) //3
console.log(sum(1,2,3)) //6

function sum() {
    //agruments 객체를 배열로 변환 
    const array  = Array.prototype.slice.call(arguments);
    return array.reduce(function(pre, cur){
        return pre + cur;
    }, 0);
}

console.log(sum(1,2)); //3
console.log(sum(1,2,3)); //6

ES6 Rest parameter 
function sum(...args) {
    return args.reduce((pre,cur)=> pre+cur,0);
}

function foo() {}
console.log(foo.length); //0

function bar(x){
    return x;
}

console.log(bar.length); //1

// 기명함수 표현
var namedFunc = function foo() {};

//익명함수 표현
var annonymousFunc = function() {};
//ES5: name 프로퍼티는 빈 문자열을 값으로 
//ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 
console.log(annonymousFunc.name); //annonymousFunc

//함수 선언문 
function bar() {};
console.log(bar.name) //bar

const obj = {a:1} ;
// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); //true
// 객체 리터럴 방식으로 생성한 객체는 프로토 타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 매서드다
console.log(obj.hasOwnProperty('a')) //true
console.log(obj.hasOwnProperty('__proto__')) //false

