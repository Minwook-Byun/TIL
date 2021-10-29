// 1. 함수는 무명의 리터럴로 생성할 수 있다. 
// 2. 함수는 변수에 저장할 수 있다. 
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다. 
const increase = function (num) {
    return ++num;
};

const decrease = function(num){
    return --num;
};

// 2. 함수는 객체에 저장할 수 있다. 
const predicates = { increase, decrease };
console.log(predicates) //{ increase: [Function: increase], decrease: [Function: decrease] } 

// 3. 함수의 매개변수에 전달할 수 있다. 
// 4. 함수의 반환값으로 사용할 수 있다. 
function makeCounter(predicate){
    let num = 0;

    return function() {
        num = predicate(num);
        return num;
    };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser()); //1
console.log(increaser()); //2 

function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
// {
//     length: { value: 1, writable: false, enumerable: false, configurable: true },
//     name: {
//       value: 'square',
//       writable: false,
//       enumerable: false,
//       configurable: true
//     },
//     arguments: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     caller: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     prototype: { value: {}, writable: true, enumerable: false, configurable: false }
//   }

function multiply(x,y){
    console.log(arguments);
    return x * y;
}
  
console.log(multiply()); //[Arguments] {} NaN
console.log(multiply(1)); //[Arguments] { '0': 1 } NaN
console.log(multiply(1,2)); // [Arguments] { '0': 1, '1': 2 } 2
console.log(multiply(1,2,3)); //[Arguments] { '0': 1, '1': 2, '2': 3 } 2

function sum(){
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다. 
    for (let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }

    return res;
}

console.log(sum()) //0
console.log(sum(1,2)) //3
console.log(sum(1,2,3)) //6

function sum(...args){
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2)); //3

function foo(){}
console.log(foo.length); //0

function 얼마나길어지나(a,b,c,d,e,f,g){}
console.log(얼마나길어지나.length); //7

const obj = { a:1 };
// 객체 리터럴 방식으로 생성한 객체 프로토타입 객체는 Object.prototype이다. 
console.log(obj.__proto__ === Object.prototype); //true 

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다. 
// hasOwnProperty 매서드는 Object.prototype의 매서드다. 
console.log(obj.hasOwnProprety('a'));  //true 
console.log(obj.hasOwnProprety('__proto__')); //false 

