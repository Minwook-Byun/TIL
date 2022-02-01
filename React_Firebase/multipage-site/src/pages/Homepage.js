import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// 스타일링
import "./Home.css";

const Homepage = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h1>홈페이지</h1>
      <p>새해 복 많이 받으셈!</p>
      {isPending && <div>로딩 중임!</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}> 더보기...!</Link>
          </div>
        ))}
    </div>
  );
};

export default Homepage;
