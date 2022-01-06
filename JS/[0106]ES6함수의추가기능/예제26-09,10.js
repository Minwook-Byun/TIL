const 부모 = {
    name: 'boram',
    sayHi() {
        return `${this.name}의 velog입니다`
    },
};

const 자식 = {
    __proto__:부모,
    //sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다 
    //sayHi의 [[HomeObject]]는 자식.prototype을 가리키고 
    //super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다 
    sayHi(){
        return `${super.sayHi()}. 글은 어떠신가요!`;
    }
};

console.log(자식.sayHi()); //boram의 velog입니다. 글은 어떠신가요!

//예제 26-10
const 자식2 = {
    __proto__ : 부모,
    //sayHi()는 ES6메서드가 아니다 
    //따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다 
    sayHi : function () {
        // SyntaxError: 'super' keyword unexpected here
        return `${super.sayHi()}. 글은 어떠신가요?`
    }
};

console.log(자식2.sayHi());
