import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// 스타일
import "./Navbar.css";

// 컴포넌트
import Searchbar from "./SearchBar";

function Navbar() {
  // const { color, changeColor } = useTheme();

  return (
    <div className="navbar">
      {/* <nav onClick={() => changeColor("pink")}> */}
      <Link to="/" className="brand">
        <h1>☕☕☕</h1>
      </Link>
      <Searchbar />
      <Link to="/create"></Link>
      {/* </nav> */}
    </div>
  );
}

export default Navbar;
