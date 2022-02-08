import { useState } from "react";
import styles from "./Login.module.css";
import { useLogIn } from "../../hooks/useLogIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, error, isPending } = useLogIn();

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
        {isPending ? <button>로그인 중입니다</button> : <button>로그인</button>}
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};

export default Login;
