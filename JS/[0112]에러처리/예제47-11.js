//외부에서 전달받은 콜백함수를 n번만큼 반복 호출한다 
const repeat = (n, f) => {
    // 매개변수 f에 전달된 인수가 함수가 아니면 TypeError를 발생시킨다ㄴ
    if (typeof f !== 'function') {
        throw new TypeError('기훈이형!!!! f가 함수가 아니잖아!!');
    }
    for (var i = 0; i < n; i++) {
        f(i) // i를 전달하면서 f를 호출
    }
};

try {
    repeat(2, 1); // 두번째 인수가 함수가 아니므로 에러가 발생 
} catch (e) {
    console.error(e); //TypeError: 기훈이형!!!! f가 함수가 아니잖아!!
}
