import React from "react";
import { Link } from "react-router-dom";
// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/login">회원가입</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
