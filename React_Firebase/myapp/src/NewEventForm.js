import { useState } from "react";
import "./NewEventForm.css";

const Neweventform = () => {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <form className="new-evnet-form" />
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>

      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <button> submit </button>
      <p> title: {title}</p>
      <p> date: {date}</p>
    </div>
  );
};

export default Neweventform;
