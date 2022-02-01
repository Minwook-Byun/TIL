import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>☕☕☕</h1>
        </Link>
        <Link to="/create"></Link>
      </nav>
    </div>
  );
}

export default Navbar;
