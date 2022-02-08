import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext(); // 디스패치해서 사용

  const logOut = async () => {
    // ✏️0208 export는 최상단에서 한 번만.
    // 내 생각 : 귤을 먹고 싶다고 귤을 까서 전달하는 것이 아니라 껍질 째로 주는 것. ㅇㅅㅇ
    // 에러 & 로딩 처리
    setError(null);
    setIsPending(true);
    try {
      // 로그아웃 action 처리
      await projectAuth.signOut();
      // 성공했으면 action을 dispatch
      dispatch({ type: "LOGOUT" });

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
  return { isPending, error, logOut };
};
