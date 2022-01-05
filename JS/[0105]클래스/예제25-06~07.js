// console.log(Person);

// class Person{} //ReferenceError: Cannot access 'Person' before initialization

const Person = '';

{
    console.log(Person); //ReferenceError: Cannot access 'Person' before initialization

    // 클래스 선언문 
    class Person {}
}

