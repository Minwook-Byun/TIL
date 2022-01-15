class 직사각형 {
    constructor(public width: number) {}
}
class 정사각형 extends 직사각형 {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type 모양 = Square | Rectangle

function calArea (shape:모양){
    if (shape instanceof 정사각형){
        shape;
        return shape.width * shape.height;
    } else {
        shape; // 타입이 Square 
        return shape.width * shape.height;
    }
}
