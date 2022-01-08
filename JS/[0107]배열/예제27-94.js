const todos =[
    {id:1, item : 'Javascript'},
    {id:3, item : 'React'},
    {id:2, item : 'CSS'},
];

//비교함수. 매개변수 key는 프로퍼티의 키 
function compare(key) {
    //프로퍼티 값이 문자열인 경우 - 산술 연산하면 NaN가 나오므로 비교 연산을 사용
    // 비교함수는 양수/음수/0을 반환하면 되므로 산술연산 대신 비교 연산을 사용할 수 있다 
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

//id를 기준으로 오름차순 정렬
todos.sort(compare('id'));
console.log(todos);
// [
//     { id: 1, item: 'Javascript' },
//     { id: 2, item: 'CSS' },
//     { id: 3, item: 'React' }
//   ]
  
//item을 기준으로 정렬 
todos.sort(compare('item'));
console.log(todos);
// [
//     { id: 2, item: 'CSS' },
//     { id: 1, item: 'Javascript' },
//     { id: 3, item: 'React' }
//   ]
  
