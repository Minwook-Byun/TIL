// it is possible to have more than one contact in your application
// whichever of the component tree that need access to that context
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload }; //color를 의미
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 이렇게 선언한 뒤에 이후에 <ThemeContext.provider>로 index.js에서
// <App /> 즉 root를 감싸주면 된다. 근데 그렇게하면 자주 수정하기가 번거롭다,
// 그래서 위의 방식으로 많이 한다.
