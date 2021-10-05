
const person = new Object(); 
// 빈 객체를 생성한다 

// 프로퍼티 추가 
person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi my name is ' + this.name);
}

console.log(person);  // {name: "lee", sayHello: f}
person.sayHello(); // Hi Myname is Lee 


// sting 생성자 함수에 의한 String 객체 생성 
const strObj = new String('lee');
console.log(typeof strObj);
console.log(strObj);

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func); // f annonymous(x)




// 17.2 생성자 함수 

const circle1 = {
    radius: 5,
    getDiameter() {
        return 2*this.radius;
    }
};

console.log(circle1.getDiameter());
console.log(typeof(circle1.getDiameter)) // function 
console.log(typeof(circle1.getDiameter())) // number

const circle2 = {
    radius: 10, 
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter());
// ()빼먹지 않기! 
// 이렇게 수십개의 객체를 만들려고 하면 문제가 커진다. 

// 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
// 생성자 함수에 의한 객체 생성 방식은 마치 클래스처럼 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다. 
// 생성자 함수 
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    this.radius = radius; //circle1.rdius=요렇게 되는 건가? radius는 5, 10 이고. 
    this.getDiameter = function() {
        return 2 * this.radius
    };
}

const circle1 = new Circle(5); // 반지름이 5인 circle객체를 생성 
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); //10 
console.log(circle2.getDiameter()); //20 

// new 연산자와 호출하면 해당 함수는 생성자 함수로 동작한다. 
// 만약 new 연산자와 함께 부르지 않으면 그냥 일반 함수임! 
const circle3 = Circle(15);
console.log(circle3); // undefined 
console.log(radius)


function Circle(radius){
    console.log(this); //circle{} => 그 말은? 암묵적으로 인스턴스가 생성되었다는 뜻. 이전에 this에 바인딩 
    
    // this에 바인딩 되어 있는 인스턴스를 초기화 한다
    this.radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
return 1000;
// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다. 
const circle = new Circle(1);
console.log(circle); //Circle { getDiameter: [Function (anonymous)] }

// 17.2.4 내부 메서드 [[call]] 과 [[construct]]

function foo() {}
foo.prop = 10; 

foo.method = function () {
    console.log(this.prop);
};

foo.method;
