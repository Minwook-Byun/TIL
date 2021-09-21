// 1번
function isEvenNumber(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEvenNumber(9)); // false
console.log(isEvenNumber(2345422)); // true

// 2번
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('홍길동', 999);
console.log(person);


//  3번

class Student {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi! My name is ${this.name}.`);
    }
}

class FeStudent {
    constructor(major) {
        this.major = major;
    }
    study() {
        console.log(`Let's study ${this.major}!`);
    }
}




const feStudent = new FeStudent('Jin', 'Frontend');
console.log(feStudent); // FeStudent { name: 'Jin', major: 'Frontend' }
feStudent.sayHi(); // Hi! My name is Jin.
feStudent.study(); // Let's study Frontend!



function printTriangle(n) {
    let star = '';
    for (let i = 0; i < n; i++) {
        star += '*';
        console.log(star);
    }
}

printTriangle(2);
printTriangle(10);


function printInvertedTriangle(n) {
    for (i = 0; i < n; i++) {
        let star = (' ').repeat(i) + (' *').repeat(n - i);
        console.log(star);
    }
}

printInvertedTriangle(2);
printInvertedTriangle(10);