import React from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logOut } = useLogOut();

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <button className="btn" onClick={() => logOut}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
