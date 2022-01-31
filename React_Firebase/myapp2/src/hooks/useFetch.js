import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 로딩중
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setError("fetch에 실패했음!");
        console.log(error);
      }
      //   다 받아왔다!
    };

    fetchData();
  }, [url]);
  return { data: data, isPending: isPending, error };
};
