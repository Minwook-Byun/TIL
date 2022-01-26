import useState from "react";
import "./App.css";

function App() {
  let name = "보람";
  const handleButtonClick = () => {
    name = "minwook";
    console.log(name);
  };

  return (
    <div className="App">
      <h1> 멋쟁이 {name}처럼</h1>
      <button onClick={handleButtonClick}>이름변경</button>
    </div>
  );
}

export default App;
