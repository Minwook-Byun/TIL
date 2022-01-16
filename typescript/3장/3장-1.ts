function squareOf(n: number){
    return n * n 
}
console.log(squareOf(2)) //4

//unknown 
let z: unknown = 30
let y = z ===123
// let _x = z + 10 // 에러 : 객체의 타입이 unknwon이다 
if (typeof z === 'number'){
    let d = z + 10 ;
}
