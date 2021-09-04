const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-List");

const TODOS_KEY = "todos"

let toDos = []; //이렇게 비어있기 때문에 replace가 계속 되는 것이다. previous copy를 잊어버림 

function saveTodo() {
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); //string형태로 저장을 해줌! 
}

function deleteToDo(event) {
    const li = event.target.parentElement; //이벤트가 일어나고 있는 것의 부모님을 모셔와라!
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedToDos();
}


function paintTodo(newTodo) {
    const li = document.createElement("li") // creating li
    li.id = newTodo.id;
    const span = document.createElement("span"); //then creating span
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText = "❌"
    li.appendChild(span); // append span to li 
    li.appendChild(button)
    toDoList.appendChild(li);
}

function handleTodoSubmist(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 변수를 저기에 저장하는 것 
    toDoInput.value = ""; // 그렇기 때문에 이렇게 ""로 만들어줘도 newTodo에는 영향을 주지 않는다. 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //랜덤처럼 기능하며 그렇게 id를 심어준다 
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

toDoForm.addEventListener("submit", handleTodoSubmist);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); //각각의 아이템에 대해서 함수를 실행시켜준다! 
}

//삭제는 delete하는 것이 아니라 그것을 제외하고 새로운 array를 만들어버리는 것! => filter 