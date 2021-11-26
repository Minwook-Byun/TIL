function foo() {
    //변수 x 생성됨 
    var x = 'local'; // 값 할당
    console.log(x);
    return x; 
    //변수 x 소멸
}

foo(); //local
console.log(x); //ReferenceError: x is not defined

var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}

foo();
console.log(x); 

function foo() {
    var foo = 10;
}

console.log(foo); //[Function: foo]

(function foo() {
    var foo = 10;
}())
console.log(foo); //ReferenceError: foo is not defined

var MYAPP = {}; // global 네임스페이스 객체 
MYAPP.name = 'boram'
console.log(MYAPP.name) //boram