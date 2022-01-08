// 예제 27-132
const todos =[
    {id:1, item : 'Javascript'},
    {id:3, item : 'React'},
    {id:2, item : 'CSS'},
];

// item이 react인 요소의 인덱스를 구한다 
reactP = todos.findIndex(todos => todos.item === 'React')
console.log(reactP) //1
