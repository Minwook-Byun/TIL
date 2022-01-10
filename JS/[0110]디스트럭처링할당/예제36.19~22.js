// 예제 36-19
function printTodos({content, completed}){
    console.log(`할일 ${content}은 ${completed ? '완료': '비완료'}`);
}
printTodos({id:1, content:'인지과학입문', completed: false})
//할일 인지과학입문은 비완료

const todos = [
    {id:1, item : 'Javascript', completed: false},
    {id:2, item : 'CSS', completed: false},
    {id:3, item : 'React', completed: true}
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다 
//예제 36-21
const [, {id}] = todos;
console.log(id); //2

const myInfo = {
    name: 'boram', 
    address: {
        zipCode : '1231',
        city: 'Seoul'
    }
};

const {address: {city}} = myInfo;
console.log(city); //Seoul


// 예제 36-22
// Rest 프로퍼티
const {x, ...rest} = {x:1, y:1, z:1};
console.log(x, rest);