function App() {
  return (
    <div>
      Hello <b> react </b>
    </div>
  );
}

// 변환
function App() {
  return React.createElement(
    'div',
    null,
    'Hello',
    React.createElement('b', null, 'react')
  );
}
