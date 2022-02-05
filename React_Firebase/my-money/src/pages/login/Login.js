import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
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

      {error ? <p>{error}</p> : null}
      {isPending ? (
        <button className="btn" disabled>
          로딩 중입니다
        </button>
      ) : (
        <button className="btn">로그인</button>
      )}
    </form>
  );
};

export default Login;
