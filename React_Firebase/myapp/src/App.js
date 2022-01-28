import { useState } from "react";
import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "welcome to the React", id: 1 },
    { title: "also welcom to the ES6", id: 2 },
    { title: "완강까지 화이팅~~~", id: 3 },
  ]);
  const handleButtonClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };
  // setEvents 안에서 event를 쓰는 것은 badpractice
  return (
    <>
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            숨기기
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            더보기
          </button>
        </div>
      )}

      {showEvents && // 요것 자체가 false이면 아예 다음 것 평가 자체를 하지 않는다
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index}-{event.title}
            </h2>
            <button
              onClick={() => {
                handleButtonClick(event.id);
              }}
            >
              삭제
            </button>
          </div>
        ))}
    </>
  );
}

export default App;
