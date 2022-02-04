import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">뱅큽 샐러드</Link>
        </li>

        <li>
          <Link to="/login"> 로그인 </Link>
        </li>
        <li>
          <Link to="/signup"> 회원가입 </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
