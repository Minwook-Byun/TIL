import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// components
import RecipeList from "../../components/RecipeList";

const Search = () => {
  // 1. 우선은 useLocation을 통해서 쿼리 파라미터를 통해서 쿼리 스트링을 받아올 수 있도록 만들자
  const queryString = useLocation().search;
  // 객체를 리턴해준다. 그리고 search를 통해서 queryString을 받아올 수 있다.
  const queryParams = new URLSearchParams(queryString);
  // queryString은 요렇게 생겼다. ?query=입력값
  // 바닐라 JS이다. 새로운 URL searchParam의 객체를 위에서 잡은 queryString을 통해서 만든다.
  const query = queryParams.get("query");

  const url = "http://localhost:3000/recipes?query=" + query;
  // 이를통해서 query가 포함된 것을 DB에서 찾아낸다.
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">검색어가 포함된 결과 "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">로딩중</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;

// we need to extract that search Parameter and use it to query our data to bring back any recipes 그 단어를 포함한
