import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Neweventform from "./NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const handleButtonClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };
  const subTitle = "이곳은 처음이지만 꼭 돌아온 것 같습니다";
  // setEvents 안에서 event를 쓰는 것은 badpractice
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        onClick={() => {
          handleModal();
        }}
      >
        이벤트 추가
      </button>
      <Title title="props 연습중 입니다" subTitle={subTitle} />
      {showModal && (
        <Modal>
          <Neweventform addEvent={addEvent} />
        </Modal>
      )}
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
