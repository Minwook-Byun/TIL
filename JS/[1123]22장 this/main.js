const circle = {
    radius : 5, //프로퍼티: 객체 고유의 상태 데이터 
    getDiameter(){ // 메서드 : 상태 데이터를 참조하고 조작하는 동작 
        return 2 * circle.radius // 자신이 속한 객체인 circle을 참조할 수 있어야 한다 
    }
}

console.log(circle.getDiameter()) //10

function Circle(radius) {
    ???.radius = radius;    /// 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 
}

Circle.prototype.getDiameter = function() {
    return 2 * ????.radius // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 
}

const circle = new Circle(5) // 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다. 

function Circle(radius) {
    this.radius = radius;   //this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
}

Circle.prototype.getDiameter = function() {
    return 2 * this.radius //this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
}

const circle = new Circle(5) //인스턴스 생성 
console.log(circle.getDiameter()) //10


//this는 어디서든지 참조가 가능하다. 
// 전역에서 this는 전역 객체 window를 가리킨다 
console.log(this); // window 

function square(num){
    console.log(this); // window // 일반함수 내부에서 this는 전역 객체 window
    return num * num 
}


square(2)

const person = {
    name : 'John',
    getName : function() { //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다 
        console.log(this); // {name : "John", getName: f}
        return this.name;
    }
};

function Person(name){
    this.name = name //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    console.log(this) //Person { name: 'boram' }
}

const me = new Person('boram')

function foo(){
    console.log("foo's this: ",this) //foo's this:  <ref *1> Object [global] window

    function bar(){
        console.log("bar's this: ",this) //bar's this:  <ref *1> Object [global] window
    }
    bar()
}
foo()

var value = 1

const obj ={ 
    value: 100, 
    foo() { 
        console.log("foo's this: ", this) //foo's this:  { value: 100, foo: [Function: foo] }
        setTimeout(function () { //콜백함수 내부의 this에는 전역 객체가 바인딩
            console.log("callback's this:", this)   //window
            console.log("callback's value:", this.value) //1
        },100)
    }
};

obj.foo()

var value = 1;

const obj  = {
    value: 100, 
    foo() {
        //this 바인딩을 변수 that에 할당한다 
        const that = this;

        //콜백 함수 내부에서 this대신 that을 참조
        setTimeout(function(){
            console.log(that)  //{ value: 100, foo: [Function: foo] }
            console.log(that.value) //100
        },100)
    }
}
obj.foo()

var value = 1;

const obj  = {
    value: 100, 
    foo() {
        //콜백 함수 내부에서 this대신 that을 참조
        setTimeout(()=> console.log(this.value),100) //100
    }
}
obj.foo()

const person = { 
    name = 'boram',
    getName() { 
        return this.name; //메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    }
};

console.log(person.getName()); //getName을 호출한 객체는 person이다. //boram

const anotherPerson = {
    name : kim,
}

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName

// getName 메서드를 호출한 객체는 anotherPerson이다
console.log(anotherPerson.getName()) //kim

// getName 메서드를 변수에 할당 
const getName = person.getName;

// getName 메서드를 일반 함수로 호출 
console.log(getName()) // ' '
// 일반함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다 

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
};

const me = new Person('Lee');
// getName 메서드를 호출한 객체는 me이다. 
console.log(me.getName());  //Lee`

Person.prototype.name = 'kim';

//getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); //kim

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return this.radius * 2 
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); //10`
console.log(circle2.getDiameter()); //20`

const circle3 = Circle(15);
console.log(circle3); //undefined
console.log(radius) // 15

주어진 this바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다 

