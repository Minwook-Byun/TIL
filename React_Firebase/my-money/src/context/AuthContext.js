import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  //   dispatch({type : 'LOG_IN'})

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
      {/* 무엇이든 이후에 감쌀 모든 것을 의미 */}
    </AuthContext.Provider>
  );
};
