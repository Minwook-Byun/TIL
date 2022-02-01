import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>쉴만한 물가</h1>
        </Link>
        <Link to="/create"></Link>
      </nav>
    </div>
  );
}

export default Navbar;
