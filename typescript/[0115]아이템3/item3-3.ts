interface Square {
    kind : 'Square';
    width : number;
    height : number;
}

interface Rectangle{
    kind : 'Rectangle';
    height : number;
    width : number;
}

type ShapeOf = Square | Rectangle;

function calculateShape(shape:ShapeOf){
    if(shape.kind === 'Square'){
        shape;
        return shape.width * shape.height;
    }else{
        shape;
        return shape.width * shape.height;
    }
}
