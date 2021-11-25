function add(x, y) {
    console.log(x, y);
    return x + y
}

add(2,5)

console.log(x,y); //ReferenceError: x is not defined

var x  = 'global '

function foo() {
    var x = 'local'
    console.log(x) //loval
}

foo()

console.log(x) //global



function foo() {
    const pikachu = 'pika-pika'
    // console.log(gobuk)
    function boo() {
        console.log(pikachu)
        const gobuk = 'gobuk-gobuk'
    }
    boo()
}
foo()

var x = 'global x'
var y = 'global y'

function outer() {
    var z = "outer's local z"
    console.log(x); //global x
    console.log(y); //global y
    console.log(z); //outer's local z

    function inner() {
        var x = "inner's local x'"
        console.log(x); //inner's local x'
        console.log(y); //global y
        console.log(z); //outer's local z
    }
    inner()
}
outer();
console.log(x) //global x
console.log(z) // z is not defined

function foo(){
    console.log('global foo'); 
}

function bar(){
    //중첩함수 
    function foo(){
        console.log('local foo');
    }
 foo() //local foo
}
bar()

var x = 1;

if(true){
    var x = 10;
}

console.log(x) //10

var i = 10;

for(var i =0; i < 5; i++) {
    console.log(i) //0,1,2,3,4
}

console.log(i) //5

var x  = 1;

function foo() {
    var x = 10;
    bar();
}

function bar(){
    console.log(x)
}
foo(); //1
bar(); //1