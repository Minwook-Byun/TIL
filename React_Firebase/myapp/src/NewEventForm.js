import { useState } from "react";
import "./NewEventForm.css";

const Neweventform = () => {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle(" ");
    setDate(" ");
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
      <button> submit </button>
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
