class Animal {
    constructor(age, weight) {
        // 공통된 인스턴스 프로퍼티 
        this.age = age;
        this.weight = weight;
    }

    eat() {return 'eat';}
    move() {return 'move';}
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스 
class Bird extends Animal {
    fly() {return 'fly';}
}

const 닭둘기 = new Bird(1,20);

console.log(닭둘기); //Bird { age: 1, weight: 20 }
console.log(닭둘기 instanceof Bird); //true
console.log(닭둘기 instanceof Animal); // true

console.log(닭둘기.eat()); //eat
console.log(닭둘기.move()); // move
console.log(닭둘기.fly()); // fly

