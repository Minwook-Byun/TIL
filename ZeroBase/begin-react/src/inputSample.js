import React, {useState} from "react";

function InputSample() {
    const [text, setText] = useState('');
    
    const onChange = (e) =>{
        setText(e.target.value)
        // e.target은 현재 선택된 DOM을 불러올 수 있고 
        // 거기에 value로 input에 값을 가져올 수 있다. 
    }

    const OnRest = () => {
        setText('');
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={OnRest}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;