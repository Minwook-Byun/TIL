// // 예제 25-57
// // // 슈퍼(베이스/부모) 클래스
// // class Base {}
// // //서브(파생/자식) 클래스
// // class Derived extends Base {}

// // //생성자 함수 
// // function Base(a){
// //     this.a = a;
// // }

// // // 생성자 함수를 상속 받는 서브 클래스
// // class Derived extends Base{}


// // 예제 25-58
// function Base1() {}

// class Base2 {}

// let condition = true;
// //조건에 따라 동적으로 상속 대상을 결정하는 서브클래스 
// class Derived extends (condition ? Base1 : Base2) {}

// const derived = new Derived();
// console.log(derived); //Derived {}

// console.log(derived instanceof Base1); //true
// console.log(derived instanceof Base2); //false

// //예제 25-60
// constructor(...args) { super(...args); }


// //예제 25-61
// //수퍼 클래스 
// class Base{}

// //서브 클래스 
// class Derived extends Base{}

// // 예제 25-62
// // 수퍼 클래스 
// class Base{
//     constructor() {}
// }
// // 서브 클래스 
// class Derived extends Base{
//     constructor(...args){super(...args);}
// }

// const derived = new Derived();
// console.log(derived);

// 예제 25-63
// 수퍼 클래스
class 부모 {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

//서브 클래스 
class 자식 extends 부모 {
    //다음과 같이 암묵적으로 constructor가 정의된다
    // constructor(...args) { super(...args);}
}

const derived =  new 자식(1,2);
console.log(derived); //자식 { a: 1, b: 2 }

