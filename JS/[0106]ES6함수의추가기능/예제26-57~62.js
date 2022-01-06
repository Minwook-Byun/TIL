function sum(x, y) {
    return x + y;
}

console.log(sum(1)) //NaN

function 방어코드sum(x, y) {
    //인수가 전달되지 않아 매개 변수 값이 undefined인 경우 기본값을 할당한다
    x = x || 0;
    y = y || 0;

    return x + y;
}

console.log(방어코드sum(1, 2)) //3
console.log(방어코드sum(100))  // 100


function ES6버전(x=0, y=0){
    return x + y;
}
console.log(ES6버전(20, 21)) //41
console.log(ES6버전()) //0 

function Rest에는못씀(...rest = []){
    console.log(rest);
}
