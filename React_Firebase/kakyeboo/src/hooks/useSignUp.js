import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignUp = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const signup = async ({ email, password, displayName }) => {
    try {
      setError(null);
      setIsPending(true);
      // 요 부분  + parameter로 넘겨받는 부분을 놓쳤다. 0207 //
      const res = await projectAuth.createUserWithEmailAndPassword({
        email: email,
        password: password,
      });
      console.log(res);

      if (!res) {
        throw new Error("회원가입에 실패했음!");
      }

      await res.user.updateProfile({ displayName });

      setIsPending(false); // 종료되었음
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { email, password, displayName };
};
