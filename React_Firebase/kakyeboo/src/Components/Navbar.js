import React from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {user ? (
            <>
              <span>hello, {user.displayName}</span>
              <li>
                <button className="btn" onClick={() => logOut}>
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
