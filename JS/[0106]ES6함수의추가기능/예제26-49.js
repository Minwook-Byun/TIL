function Rest알아보자(...rest){
    // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다
    console.log(rest);
}

Rest알아보자('컴퓨터구조','자료구조','OOP')

function 파라미터랑같이(param, ...rest) {
    console.log(param); //1
    console.log(rest); // [ 2, 3, 4, 5 ]
}

파라미터랑같이(1,2,3,4,5)

function 가변인자받기(...args){
    //Rest 파라미터 args에는 배열 [1,2,3,4,5]가 할당된다 
    return args.reduce((pre,cur) => pre + cur, 0);
}

console.log(가변인자받기(1,2,3,4,5)); //15


