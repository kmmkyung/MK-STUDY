const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos =[];

function saveToDos(){
  localStorage.setItem("todos",JSON.stringify(toDos));
}

function ToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const botton = document.createElement("botton");
  span.innerText=newTodo;
  botton.innerText="❌";
  li.appendChild(span);
  li.appendChild(botton);
  toDoList.appendChild(li);
  botton.addEventListener("click",delToDo);
}

function delToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener("submit",ToDoSubmit);

const savedToDos = localStorage.getItem("todos")
if(savedToDos!==null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}