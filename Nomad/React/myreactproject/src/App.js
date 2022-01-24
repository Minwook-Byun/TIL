import styled from "styled-components";

// 기존의 inline 스타일 방식 => 각각의 컴포넌트의 역할을 직관적으로 알 수 없다.
// 그런데 이런 방식으로 구현하면 스타일 부분과 구현하는 부분을 나눌 수 있다.

/* `` 백틱을 이용!
그리고 안에는 css를 적어준다! */

const Flex = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Flex>
      <BoxOne />
      <BoxTwo />
    </Flex>
  );
}

export default App;
