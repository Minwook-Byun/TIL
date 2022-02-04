import React, { useState } from "react";

import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <label>
        <p>이메일:</p>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>비밀번호</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button className="btn"> 로그인 </button>
    </form>
  );
};

export default Login;
