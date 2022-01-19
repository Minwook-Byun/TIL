// import { Component } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         {' '}
//         <h1>이벤트 실습</h1>
//       </div>
//     );
//   }
// }

// export default EventPractice;

import { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1> 이벤트 연습하기</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요🙋"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
