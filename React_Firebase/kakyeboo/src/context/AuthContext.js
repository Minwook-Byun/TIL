import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    // 현재 상태를 모두 받아오고 하단에 null인 user를 업데이트 해준다.
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    // 유저의 로그인 상태
    authIsReady: false,
  });

  // 처음 평가될 때 실행
  useEffect(() => {
    // Adds an observer for changes to the user's sign-in state.=> 유저가 있는지 없는지 살핀다
    const unSubscribe = projectAuth.onAuthStateChanged((user) => {
      // 어쓰가 되었으므로 dispatch를 뿌려주자
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unSubscribe(); //처음 한 번만 실행
    });
  }, []);

  console.log("AuthContext state: ", state);
  //   state가 변경될 때마다 reEvaluate되고 출력을 확인할 수 있도록.
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
