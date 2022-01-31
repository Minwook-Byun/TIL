import { useState } from "react";
import "./NewEventForm.css";

const Neweventform = ({ addEvent }) => {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, SetLocation] = useState("");

  const resetForm = () => {
    setTitle(" ");
    setDate(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title, //state의 title
      date: date,
      id: Math.floor(Math.random() * 100), //random한 id 생성
    };

    console.log(event);
    addEvent();
    resetForm();
  };

  return (
    <div>
      <form className="new-evnet-form" />
      <label className="new-evnet-form-label">
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>

      <label className="new-event-form-evnet">
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </label>

      <label>
        <p>이벤트 장소</p>
        <select
          onChange={(e) => {
            SetLocation(e.target.value);
          }}
        >
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="제주">제주</option>
        </select>
      </label>

      <button onClick={handleSubmit}> submit </button>
      <p> title: {title}</p>
      <p> date: {date}</p>
      <button
        onClick={() => {
          resetForm();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Neweventform;
