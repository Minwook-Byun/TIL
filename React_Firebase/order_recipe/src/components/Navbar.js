import { Link } from "react-router-dom";

// 스타일
import "./Navbar.css";

// 컴포넌트
import Searchbar from "./SearchBar";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>☕☕☕</h1>
        </Link>
        <Searchbar />
        <Link to="/create"></Link>
      </nav>
    </div>
  );
}

export default Navbar;
