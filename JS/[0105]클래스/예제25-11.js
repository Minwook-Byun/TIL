class Person {
    // 생성자 
    constructor(name){
        //인스턴스 생성 및 초기화 
        this.name = name;
    }
}

//25-17
class AFY {
    //constructor는 생략해도 아래와 같이 빈 constructor가 암묵적으로 정의된다 
    constructor() {}
}

// 빈 객체가 생성된다 
const sixth = new AFY();
console.log(sixth); //AFY {}

25-18
class HUFS {
    constructor(){
        this.name = 'HUFS';
        this.address = '이문동';
    }
}

// 인스턴스 프로퍼티가 추가된다 
const univ = new HUFS();
console.log(univ) //HUFS { name: 'HUFS', address: '이문동' }


// 25-20
class HUFS {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

// 인스턴스 프로퍼티가 추가된다 
const univ = new HUFS('boram', '송도');
console.log(univ) //HUFS { name: 'boram', address: '송도' }

