const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos =[];

toDoForm.addEventListener("submit",ToDoSubmit);
function ToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = ""; // 쓰고 나서 비우고
  const newTodoOBJ = {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoOBJ); // obj 담기
  paintToDo(newTodoOBJ); // 화면 출력
  saveToDos();
}

// function paintToDo(newTodo){
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const listBtn = document.createElement("button");
//   span.innerText = newTodo.text;
//   li.id = newTodo.id;
//   listBtn.innerText="___X___";
//   toDoList.appendChild(li);
//   li.appendChild(span);
//   li.appendChild(listBtn);
//   listBtn.addEventListener("click",delToDo);
// }


function paintToDo(newToDo){
  // console.log("I will paint", newToDo);
  // console.log(newToDo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("span");
  span.innerText = newToDo.text;
  li.id = newToDo.id;
  button.innerText = `___X___`
  
  toDoList.appendChild(li);
  li.appendChild(span); //li > span
  li.appendChild(button);
  button.addEventListener("click", delToDo);
}


// 로컬에 저장
function saveToDos(){
  localStorage.setItem("todos",JSON.stringify(toDos)); //로컬에 string으로 넣기
}

const savedToDos = localStorage.getItem("todos")
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 기존 리스트 포함해서 로컬에 저장
  parsedToDos.forEach(paintToDo);
}

function delToDo(event){
  const li = event.target.parentElement;
  li.remove();
  // 내가 클릭한 li의 id가 같지 않은것을 남기고 싶어
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos()
}