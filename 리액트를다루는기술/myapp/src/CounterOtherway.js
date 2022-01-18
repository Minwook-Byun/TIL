import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <h2>커지지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출될 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1{' '}
        </button>
      </div>
    );
  }
}

export default Counter;
