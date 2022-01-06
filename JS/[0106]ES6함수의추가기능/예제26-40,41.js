//BAD
function BadPerson(name) {
    this.name = name;
}

BadPerson.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const badperson = new BadPerson();
badperson.sayHi(); //Hi undefined

//GOOD 
function GoodPerson(name) {
    this.name = name;
}

GoodPerson.prototype.sayHi = function () {
    console.log(`Hi ${this.name}`);
};

const Good_Person = new  GoodPerson('Boram');
Good_Person.sayHi();//Hi Boram

