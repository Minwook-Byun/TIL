import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useContext가 AuthProvider 내부에 있어야 합니다!");
  }

  return context;
};
