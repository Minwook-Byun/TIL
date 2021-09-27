import React, {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name:'',
        nickanme:'',
// 여러개를 받을 때는 함수도 여러개 만들어야 할까? no! 객체로 관리해주자 
    });
    const {name, nickanme} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target;
        const nextInputs= ({
            ...inputs, //기존의 내용이 복사된다 
            [name]:value, 
        });
    };
// 불변성을 지킨다. 객체 상태를 업데이트를 할 때는 
// 기존의 값을 복사하고 그것에 덮어씌우고 새로운 상태로 만들어줘야 한다.
// 그래야 상태가 업데이트되었다는 것을 알게 되고 필요한 렌더링을 해준다. 
const nameInput = useRef();
    // 이렇게 호출해주고 => 원하는 dom에 설정을 해주고,  => 만들어준값 + current
const OnRest = () => {
        setInputs({
            name:'',
            nickanme:'',
        });
        nameInput.current.focus();
        // 초기화를 실행햇을 때 
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={useRef}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickanme}/>
            <button onClick={OnRest}>초기화</button>
            <div>
                <b>값: </b>
                이름(닉네임)
            </div>
        </div>
    )
}

export default InputSample;