const obj = Object.create({name:'boram'});
// Object.create는 정적 메서드다 
obj.hasOwnProperty('name'); //false
//Object.prototype.hasOwnProperty는 프로토타입 메서드다.
