// 클래스형 컴포넌트에서
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수 컴포넌트에서
const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
