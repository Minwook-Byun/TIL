import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  return (
    <div>
      <button> onClick = {onClickEnter} </button>
      <button> onClick = {onClickLeave} </button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
