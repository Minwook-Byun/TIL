import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  //   localhost:3000/blog/아이디/날짜/시간/몇번째인가
  console.log(router.query);
  //   post: Array(4)
  // 0: "아이디"
  // 1: "날짜"
  // 2: "시간"
  // 3: "몇번째인가"
  // length: 4
  return <div>블로그 포스팅</div>;
};

export default Post;
