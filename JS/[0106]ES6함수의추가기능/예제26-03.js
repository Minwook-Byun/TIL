//프로퍼티 f에 바인딩된 함수는 callable이며 constructor이다 
var obj = {
    msg: '나를 호출해봥!',
    f: function () {
        return this.msg;
    }
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj.f());  //나를 호출해봥!

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출 
var bar = obj.f;
console.log(bar()); //undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출 
console.log(new obj.f()); //f {}

