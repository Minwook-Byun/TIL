export default function Title({ title, subTitle }) {
  return (
    <div>
      {/* <h1 className="title">{props.title}</h1>
      <h2 className="subtitle"> {props.subTitle} </h2> */}
      {/* below here using destructuring => 모르면 자바스크립트 더 공부하셈 */}
      <h1 className="title">{title}</h1>
      <h2 className="subtitle"> {subTitle} </h2>
    </div>
  );
}
