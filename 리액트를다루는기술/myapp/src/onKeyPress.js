import { Component } from 'react';

class UserInput extends Component {
  state = {
    username: 'ㅎㅇ',
    message: 'ㅎㅇㅎㅇ',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ' ' + this.state.message);
    this.setState({
      username: ' 공백이 아니라면?💫 ',
      message: ' 공백이 아니라면?💫 ',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습 - classComponent</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}> 확인</button>
      </div>
    );
  }
}

export default UserInput;
