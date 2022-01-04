const person = {
    name: 'Boram',
    address: 'Seoul',
};

// 각각의 객체에 name 프로퍼티가 존재한다 
console.log('name' in  person); //true
console.log('address' in person); //true
console.log('age' in person); //false person 객체에 age 프로퍼티가 존재하지 않는다

//예제 19-62
console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('age')); //false

//예제 19-63
console.log(person.hasOwnProperty('toString'))//false

