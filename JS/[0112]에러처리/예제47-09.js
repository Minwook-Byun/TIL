// 예제 47-09
try{
    //에러 객체를 생성한다고 에러가 발생하는 것은 아니다 
    new Error('뭔가 잘못됐네!')
}catch(e){
    console.log(e)
}

// 예제 47-10
try {
    //에러 객체를 던지면 catch 코드 블록이 실행되기 시작
    throw new Error('뭔가 잘못됐네!');
} catch (err) {
    console.log(err); //Error: 뭔가 잘못됐네!
} 
