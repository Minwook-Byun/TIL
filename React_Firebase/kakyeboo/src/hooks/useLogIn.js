import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogIn = (email, password) => {
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext(); // 디스패치해서 사용

  const logIn = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      // 성공했으면 action을 dispatch
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false); // 종료되었음
      setError(null);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setIsPending(false);
    } finally {
      console.log("환영합니당!");
    }
  };
  return { isPending, error, logIn };
};
