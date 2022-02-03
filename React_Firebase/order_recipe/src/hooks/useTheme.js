import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    // scope를 벗어났을 때를 의미 , 지금은 전역이라서 이런 에러를 마주하지 x
    throw new Error("useTheme()은 ThemeProvider의 안에서 사용되어야 합니다!");
  }

  return context;
};
