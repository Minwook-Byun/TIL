import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  return() {
    const { name, favoriteNum, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children의 값은 {children} <br />
        제가 좋아하는 숫자는 {favoriteNum}입니다
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '⭐ 유저의 기본 이름 ⭐ ',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNum: PropTypes.number.isRequired,
};

export default MyComponent;
