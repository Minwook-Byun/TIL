class Person{
    //생성자 
    constructor(name){
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다 
        console.log(this); // Person {}
        console.log(Object.getPrototypeOf(this) === Person.prototype); //true 유전자 일치
    //2. this에 바인딩되어 있는 인스턴스를 초기화 
    this.name = name;
    
    //3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환 
    }
}

