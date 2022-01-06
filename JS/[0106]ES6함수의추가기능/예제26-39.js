//Bad
const BadPerson = {
    name : 'Boram', 
    introduce: () => console.log(`Hi ${this.name}`)
};

BadPerson.introduce(); //Hi undefined

// 예제 26-40
const GoodPerson = {
    name: 'Good Boram',
    introd() {
        console.log(`Hi ${this.name}`);
    }
};

GoodPerson.introd(); //Hi Good Boram

