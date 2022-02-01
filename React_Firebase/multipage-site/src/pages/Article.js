import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const history = useHistory();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);

  useEffect(() => {
    return () => {
      if (error) {
        //redirect
        //   history.goBack()
        // 2초 딜레이 주자
        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    };
  }, [error]);

  return (
    <div>
      {isPending && <div>로딩중...</div>}
      {error && (
        <div>
          {error} 에러가 났습니다.
          <br /> 2초 후 메인 홈페이지로 돌아갑니다.
        </div>
      )}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>저자 : {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
