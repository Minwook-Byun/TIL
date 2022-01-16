// let object_a : object = {
//     b : 'x'
// };

// object_a.b //Property 'b' does not exist on type 'object'

let object_a = {
    b: 'x',
} // {b:string}
console.log(object_a.b) //x

let object_b = {
    c:{
        d: 'f'
    }
}

console.log(object_b) //{ c: { d: 'f' } }

const obj_a : {b:number} = {
    b:12
} //b: number

let obj_c: {
    firstName : string
    lastName : string
} = {
    firstName : 'john',
    lastName : 'barrowman'
}

class Person {
    constructor(
        public firstName : string, 
        public lastName : string,
    ){}
}

// c = new Person('matt', 'smith')

let object_A: {
    b : number // -(1)
    c? : string  // -(2)
    [key:number] : boolean // -(3)
}

let airplanSeatingAssignment: {
    [seatNumber: string] : string
} = {
    '34D' : '내 자리',
    '34E' : '네 자리'
}

let user : {
    readonly firstName : string 
} = {
    firstName : 'abby'
}
// user.firstName = '새로운 이름!'
//Cannot assign to 'firstName' because it is a read-only property.ts(2540)
