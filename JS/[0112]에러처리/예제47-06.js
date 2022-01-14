console.log('[스타~~트!]');

try {
    //실행할 코드(error 가능성이 있는 코드)
    foo()
} catch (err) {
    //try 코드에서 에러가 발생하면 이 코드가 실행
    // err에는 try 코드 블록에서 발생한 Error 객체가 전달된다 
    console.error('⭐에러가 났어요!⭐',err);
    //⭐에러가 났어요!⭐ ReferenceError: foo is not defined
} finally{
    //에러 발생과 상관 없이 반드시 단 한 번 실행
    console.log('finally!')
}
