if(true) {
    var x = 3;
}

console.log(x); //3 

if (true) {
    const y  = 3;
}

// console.log(y); //y is not defined

// =================================================================
// 템플릿 문자열 
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + '더하기' + num2 + '는 \'' + result + '\'';
console.log(string1);

// ES6
const num3 = 10;
const num4 = 20;
const result2 = 30;
const string2 = `${num3} 더하기 ${num4}는 ${result2}`
console.log(string2);

var sayNode = function() {
    console.log('Node')
};

var es = 'ES'
var oldObject = {
    sayJS: function() {
        console.log('JS')
    },
    sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic'
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); //Fantastic

const newObject ={
    sayJS(){
        console.log('JS')
    },
    sayNode,
    [es+6]: 'Fantastic',
};

newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); //Fantastic


// =================================================================
// 화살표 함수 
function add1(x,y) {
    return x + y ;
};

const add2 = (x,y) => {
    return x + y ;
};

const add3 = (x,y) => x + y ;
const add4 = (x,y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;