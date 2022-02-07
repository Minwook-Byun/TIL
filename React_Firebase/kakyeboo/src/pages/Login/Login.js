import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <label>
          <span>이메일:</span>
          <input
            input="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>비밀번호</span>
          <input
            input="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Login;
