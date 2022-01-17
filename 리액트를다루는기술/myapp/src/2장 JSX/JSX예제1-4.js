//삼항연산자 
function App(){
    const name = '보람';
    return (
        <div>
            {name === '보람' ? (<h1>올바른 사용자</h1>) : (<h2>잘못된 접근</h2>)}
        </div>
    )
}

// AND 이용하기 
// function App(){
//     const name = '보람';
//     return (
//         <div>
//             {name === '보람' ? <h1>올바른 사용자</h1> : null}
//         </div>
//     )
// }

function App(){
    const name = '보람';
    return (
        <div>
            {name === '보람' ? <h1>올바른 사용자</h1> : null}
        </div>
    )
}

// 더 짧은 코드로 
function App(){
    const name = '보람';
    return (
        <div>{name === '보람' && <h1>올바른 사용자</h1>}</div>
    )
}

