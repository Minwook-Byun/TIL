import React, { useState } from "react";
import styles from "./SignUP.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <label>
        <span>이름</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        <span> 이메일 </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span> 비밀번호 </span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="btn"> 회원가입 </button>
    </form>
  );
};

export default Signup;
