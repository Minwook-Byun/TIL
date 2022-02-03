import { useState } from "react";
import { useHistory } from "react-router-dom";

// 스타일
import "./SearchBar.css";

// 유저가 input에 무엇인가를 타이핑하면 onChange를 통해서 이를 잡아내고
// setTerm을 통해서 여기에 입력한 값(e. target.value)를 받아준다
// 그리서 submit이 일어나면 onSubmit에 의해서 handleSubmit이 발생하고
//  e.preventDefault()를 통해서 기본 동작인 새로고침을 막은 후에
// term을 이용해서 그에 해당하는 redirecting them to the search 페이지
const Searchbar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?query=${term}`);
    // search로 가게끔 만들어준다.
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> 검색: </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;
