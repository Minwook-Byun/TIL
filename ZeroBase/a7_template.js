/*
  Q1) 숫자 n을 입력받아 n이 짝수이면 true, 홀수이면 false를 "반환"하는 isEvenNumber 함수를 완성해주세요. (5점)
  제한사항: n은 1이상의 양수입니다.
*/
function isEvenNumber(n) {
  // do something
}

console.log(isEvenNumber(9)); // false
console.log(isEvenNumber(2345422)); // true

// Q2) name(string), age(number)를 입력받아 person 인스턴스를 생성하는 Person 생성자 함수를 완성해주세요. (5점)
function Person(name, age) {
  // do something
}

const person = new Person('홍길동', 999);
console.log(person); // Person { name: '홍길동', age: 999 }

/*
  Q3) Student 클래스를 extends한 FeStudent 클래스를 작성해주세요. (15점)
  FeStudent 클래스 constructor는 name(string), major(string)를 입력받아 FeStudent 인스턴스를 생성합니다.
  FeStudent 인스턴스는 FeStudent 프로토타입으로부터 study 메소드를 상속받습니다.
  study 메소드는 'Let's study (major)!' 텍스트를 출력합니다. 아래 예제를 참고해주세요.

  제한사항: Class 문법만을 사용합니다.
  ex) FeStudent.prototype.study = function () {...}; 사용 X
*/
class Student {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}.`);
  }
}

class FeStudent {
  // do something
}

const feStudent = new FeStudent('Jin', 'Frontend');
console.log(feStudent); // FeStudent { name: 'Jin', major: 'Frontend' }
feStudent.sayHi(); // Hi! My name is Jin.
feStudent.study(); // Let's study Frontend!

/*
  Q4) 숫자 n을 입력받아 삼각형 모양의 문자를 "출력"하는 printTriangle 함수를 완성해주세요. (15점)
  제한사항: n은 2이상, 10 이하의 양수입니다.

  n = 2일 때 아래와 같이 출력
  *
  **

  n = 10일 때 아래와 같이 출력
  *
  **
  ***
  ****
  *****
  ******
  *******
  ********
  *********
  **********
*/

function printTriangle(n) {
  // do something
}

printTriangle(2);
printTriangle(10);

/*
  Q5) 숫자 n을 입력받아 역삼각형 모양의 문자를 "출력"하는 printInvertedTriangle 함수를 완성해주세요. (30점)
  제한사항: n은 2이상, 10 이하의 양수입니다.

  n = 2일 때 아래와 같이 출력
  * *
   *

  n = 10일 때 아래와 같이 출력
  * * * * * * * * * * 
   * * * * * * * * *
    * * * * * * * *
     * * * * * * *
      * * * * * *
       * * * * *
        * * * *
         * * *
          * *
           * 
*/

function printInvertedTriangle(n) {
  // do something
}

printInvertedTriangle(2);
printInvertedTriangle(10);
