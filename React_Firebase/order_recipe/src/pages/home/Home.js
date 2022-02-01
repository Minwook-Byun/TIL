import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const {
    data: menus,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error},에러났음 ㅇㅅㅇ</p>}
      {isPending && <div className="loading"> 로딩중....</div>}
      {menus && <RecipeList menus={menus} />}
    </div>
  );
};

export default Home;
