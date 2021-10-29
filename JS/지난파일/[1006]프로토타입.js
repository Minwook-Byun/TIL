const boram = {
    name: 'minwook',
    address: 'seoul',
};

console.log(boram); //{ name: 'minwook', address: 'seoul' }

function Circle(radius)  {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI*this.radius ** 2 ;
    }
};

// 반지름 1짜리 인스턴스 
const circle = new Circle(1);
// 반지름 2짜리 인스턴스 
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //false

function Circle(radius)  {
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 매서드를 공유해 사용할 수 있도록
// 우리는 부모의 프로토타입(DNA)에 추가해버릴 것이다. 
// DNA는 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다. 

Circle.prototype.getArea = function() {
    return Math.PI*this.radius ** 2 ;
}

const circle = new Circle(1);

const circle2 = new Circle(2);

// 이전과 달리 true가 나온다. 즉 모든 인스턴스는 하나의 메서드를 공유한다. 
console.log(circle1.getArea === circle2.getArea); //true 
