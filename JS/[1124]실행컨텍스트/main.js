const x = 1 

function foo() {
    const y = 2;

    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    bar()
}
foo() //6

var x = 1;
const y = 2;

function foo(a) {
    var x = 3;
    const y = 4;

    function bar(b) {
        const z = 5;
        console.log(a + b + x + y + z);
    }
    bar(10);
}
foo(20);

let foo = 1 
{
    console.log(foo) //ReferenceError: Cannot access 'foo' before initialization
    let foo = 2
}