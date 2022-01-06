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

