interface Square {
    width : number;
}

interface Rectangle extends Square {
    height : number;
}
type Shape = Square | Rectangle;

// function caculateArea(shape:Shape){
//     if(shape instanceof Rectangle){
//         return shape.width * shape.height;
//     } else {
//         return shape.width * shape.height;
//     }
// }

function caculateArea(shape:Shape){
    if('height' in shape){
        shape; // 타입이 Retangle 
        return shape.width * shape.height;
    } else {
        shape; // 타입이 Square
        return shape.width * shape.height;
    }
}

