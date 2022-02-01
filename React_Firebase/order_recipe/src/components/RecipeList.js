import React from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";

export default function RecipeList({ menus }) {
  return (
    <div className="recipe-list">
      {/* 파라미터로 확실히 가져오기 때문에 더 이상 &&map 이렇게 안 해도 된다  */}
      {menus.map((menu) => (
        <div key={menu.id} className="card">
          <p>{menu.title}</p>
          <p>{menu.cookingTime} to make</p>
          <span>{menu.method.substring(0, 100)}....</span>
          <Link to={`/recipes/${menu.id}`}>더보기</Link>
        </div>
      ))}
    </div>
  );
}
