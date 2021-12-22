if(true) {
    var x = 3;
}

console.log(x); //3 

if (true) {
    const y  = 3;
}

// console.log(y); //y is not defined

// =================================================================
// 템플릿 문자열 
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + '더하기' + num2 + '는 \'' + result + '\'';
console.log(string1);

// ES6
const num3 = 10;
const num4 = 20;
const result2 = 30;
const string2 = `${num3} 더하기 ${num4}는 ${result2}`
console.log(string2);

var sayNode = function() {
    console.log('Node')
};

var es = 'ES'
var oldObject = {
    sayJS: function() {
        console.log('JS')
    },
    sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic'
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); //Fantastic

const newObject ={
    sayJS(){
        console.log('JS')
    },
    sayNode,
    [es+6]: 'Fantastic',
};

newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); //Fantastic


// =================================================================
// 화살표 함수 
function add1(x,y) {
    return x + y ;
};

const add2 = (x,y) => {
    return x + y ;
};

const add3 = (x,y) => x + y ;
const add4 = (x,y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

var relationships = {
    name : 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFri : function() {
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    },
};

relationships.logFri()
//================================================================

const relationship2 = {
    name : 'zero', 
    friends: ['nero', 'hero', 'xero'],
    logFri() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};

relationship2.logFri();

//===========================================================================
// 구조분해 할당 
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count -- 
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: `node`,
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy, status: {count} } = candyMachine;

var array = ['node.js', {}, 10, true]
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['node.js', {}, 10, true]
const [node, obj, bool] = array 

// ===========================================================
var Human = function(type){
    this.type = type || 'human'; 
};

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function() {
    alert('haaaaaaaaaaaaam')
}

var BORAM = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

BORAM.prototype = Object.create(Human.prototype);
BORAM.prototype.constructor = BORAM; // 상속하는 부분 
BORAM.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
};
var OldBoram = new BORAM('human', 'BORAM', "I");
Human.isHuman(OldBoram);

// ================================
class Human {
    constructor(type = 'human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe() {
        alert("haaaaaaaaaaam")
    }
}

class Boram extends Human {
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newBoram = new Boram('human', 'Boram', 'chan');
Human.isHuman(newBoram)

//========================================
const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
  .then((message) => {
      console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((err) => {
      console.log(error); // 실패(reject)한 경우 실행 
  })
  .finally(() => {
      // 끝나기 전에 무조건 한 번은 실행
      console.log('무조건')
  }); 

// =================================================================
promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    });
})
.then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
})
.then((message3) => {
    console.log(message3);
})
.catch((error) => {
    console.error(error);
})

//===============================