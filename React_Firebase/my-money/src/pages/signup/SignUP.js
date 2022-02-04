import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// 스타일
import styles from "./SignUP.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 훅 사용하는 부분
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password);
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
      {!isPending && <button className="btn"> 회원가입 </button>}
      {isPending && (
        <button className="btn" disabled>
          진행중입니다...
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
