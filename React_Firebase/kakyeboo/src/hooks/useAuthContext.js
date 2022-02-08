import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext는 반드시 유효한 범위 내에 있어야 합니다!");
  }

  return context;
};
