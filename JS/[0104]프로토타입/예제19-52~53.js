// const obj = {a:1};

// console.log(obj.hasOwnProperty('a')); // true
// console.log(obj.propertyIsEnumerable('a'));  //true


//예제 19-53
// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성
// const obj = Object.create(null);
// obj.a = 1;

// console.log(Object.getPrototypeOf(obj) === null); // true

//obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다 
// console.log(obj.hasOwnProperty('a'));
//TypeError: obj.hasOwnProperty is not a function


const obj = Object.create(null);
obj.a = 1;

//Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다 
console.log(Object.prototype.hasOwnProperty.call(obj,'a')); //true
 
