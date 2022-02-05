import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">뱅큽 샐러드</Link>
        </li>
        {!user && (
          // user가 null(false 라면)
          <>
            <li>
              <Link to="/login"> 로그인 </Link>
            </li>
            <li>
              <Link to="/signup"> 회원가입 </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <p>{user.displayName}</p>
            <li>
              <button className="btn" onClick={logout}>
                로그아웃
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
