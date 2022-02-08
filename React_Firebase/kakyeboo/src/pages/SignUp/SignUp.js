import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

// styles
import styles from "./SignUp.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    // signup
    // import 해오는 것은 알았고 디스트럭처링까지는 알았으나 어떻게 써야할지 모름!
    signup({ email, password, displayName });
    // 걍 쓰면 됨!
    // 왜 오브젝트로 넘겨줘야.. 에러가 안나지?
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>sign up</h2>
      <label>
        <span>이메일:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value.trim())}
          value={email}
        />
      </label>
      <label>
        <span>비밀번호:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value.trim())}
          value={password}
        />
      </label>
      <label>
        <span>사용자이름:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {isPending ? (
        <button className="btn" disabled>
          진행 중...
        </button>
      ) : (
        <button className="btn">회원가입</button>
      )}

      {error ? <p>{error}</p> : null}
    </form>
  );
}
