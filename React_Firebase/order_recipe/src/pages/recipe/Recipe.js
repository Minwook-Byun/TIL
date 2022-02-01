import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const url = " http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p>에러났음!</p>}
      {isPending && <span className="loading">로딩중</span>}
      {recipe && (
        <>
          <h2 className="title">{recipe.title}</h2>
          <p> 조리시간 : {recipe.cookingTime}</p>
          <p className="method"> 조리방법: {recipe.method} </p>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                재료{i + 1} : .{ing}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Recipe;
