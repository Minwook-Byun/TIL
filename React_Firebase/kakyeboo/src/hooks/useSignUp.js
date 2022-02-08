import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password, displayName }) => {
    // 에러 & 로딩 처리
    setError(null);
    setIsPending(true);
    try {
      // 요 부분  + parameter로 넘겨받는 부분을 놓쳤다. 0207 //
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("회원가입에 실패했음!");
      }

      //  유저 이름 update
      await res.user.updateProfile({ displayName });

      // login action을 dispatch 해줌
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false); // 종료되었음
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, isPending, error };
  // 에러 : 'displayName' is not defined 마주침
  // return return { email, password, displayName }; 을 해줘서
};
