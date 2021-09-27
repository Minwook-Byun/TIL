import React, {useState} from "react";

// 버튼이 클릭이 되면 +1 -1을 시키는 것을 만들어보자! 

    // 우선은 함수를 만들어줘야 한다 
    function Counter(){
        const [number, setNumber] = useState(0);
        const onIncrease =()=>{
            setNumber(prevNumber => prevNumber + 1);
        }
        const onDecrease = () =>{
            setNumber(number - 1);
        }

        return(
            <div>
                <h1>{number}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        )
    }
    


export default Counter;