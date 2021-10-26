const obj = {
    "name" : "Lee",
    "age" : 20,
    "alive" : true,
    "hobby" : ["traveling", "tennis"]
}

// 객체를 JSON 포맷의 문자열로 변경 
const json = JSON.stringify(obj);
console.log(typeof json, json);

// 객체를 JSON 포맷의 문자열로 변화하면서 들여쓰기 한다
const boramJson = JSON.stringify(obj, null, 2);
console.log(typeof boramJson, boramJson);

function filter(key, value){
    return typeof value === 'number' ? undefined : value;
}

const strFilter = JSON.stringify(obj, filter, 2);
console.log(typeof strFilter, strFilter);

const todos = [
    {id:1, const: '인지과학입문', completed: false},
    {id:2, const: '자료구조', completed: false},
    {id:3, const: '컴구조', completed: false}
];

// 배열을 JSON 포맷의 문자열로 변환한다. 
const json = JSON.stringify(todos, null, 2);
console.log(typeof json, json);

const json = JSON.stringify(obj);
console.log(json);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);

// XMLHttpRequest 
const xhr = new XMLHttpRequest(); 
// http 요청 초기화
xhr.open('GET', '/users');

// http 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정:json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send();
// 객체 생성
const xhr1 = new XMLHttpRequest();
// HTTP 요청 초기화 
xhr.open('POST', '/users');
// HTTP 요청헤더 설정, 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정:JSON 
xhr.setRequestHeader('content-type', 'application/json');
// HTTP 요청전송
xhr.send(JSON.stringify({id:1, content:'인지과학입문', completed: false}));

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode..com/todos/1');

xhr.send();
xhr.onreadystatechange = () =>{
    // 만약 서버 응답이 아직 완료되지 않았다면 아무런 처리를 하지 않는다.
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    // status 프로퍼티는 으답상태 코드를 나타낸다. 
    // status 프로퍼티 값이 200이면 정상적으로 응답된 상태, 200이 아니면 에러가 발생한다. 
    // 정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답결과가 담겨있다. 
    if(xhr.status === 200){
        console.log(JSON.parse(xhr.response));
        // {id:1, content:'인지과학입문', completed: false}
    }else{
        console.error('Error', xhr.status, xhr.statusText);
    }
}

//객체 생성
const xhr = new XMLHttpRequest();

// http 요청 초기화 
xhr.open('GET', 'https://jsonplaceholder.typicode..com/todos/1');
// http 요청 전송
xhr.send();
// load이벤트는 HTTP 요청이 성공적인 경우에만 발생 
xhr.onload = () =>{
    if(xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    } else {
        console.error('Error', xhr.status, xhr.statusText);
    }
}


