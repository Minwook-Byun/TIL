import react from "react";

// function Hello(props){
//     console.log(props);
//     return <div style = {{color:props.color}}>안녕하세요{props.name}</div>;
// }

// 비동기적이거나 비구조로
function Hello({color, name, isSpecial}){
    return ( 
    <div style={{color}}>
        {isSpecial ? <span>👍</span> :null} 
        {/* 삼항연산자는 보통 내용이 달라져야할 때 사용, 참거짓일 때는 && 쓰는게 간편*/}
        {isSpecial} ? '스페셜하다':'스페셜하지 못하다'
        {isSpecial && <span>👍</span>} 
        {/* isSpecial이 위에 argu에서부터 F/T가 갈려서 온다 */}
        안녕하세요 {name}
    </div>
    );
}

Hello.defaultProps = {
//   default 값을 설정해주고 싶을 때 
    name:'이름없음'
};

// props. props. 이렇게 안해도 된다. 

export default Hello;