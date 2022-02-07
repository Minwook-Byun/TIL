import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Home.module.css";
import Transactionform from "./Transactionform";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>가계부</div>
      <div className={styles.sidebar}>
        <Transactionform uid={user.uid} />
        {/* 이후에 가계부에도 UID가 필요하기 때문에 props 로 넘겨준다 */}
      </div>
    </div>
  );
};

export default Home;
