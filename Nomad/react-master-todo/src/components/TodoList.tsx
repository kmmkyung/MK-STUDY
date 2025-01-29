import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreactToDo";
import { addCategoryState, Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

// function TodoList(){
//   const [ todo, setTodo] = useState('')
//   const [ todoError, setTodoError ] = useState('')
  
//   function onChange(event:React.FormEvent<HTMLInputElement>){
//   const value = event.currentTarget.value;
//   setTodoError('')
//   setTodo(value);
//   }

//   function onSubmit(event:React.FormEvent<HTMLFormElement>){
//     event.preventDefault();
//     if(todo.length < 10){
//       return setTodoError('Todo is too short')
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} type="text" placeholder="Write a to do"/>
//         <button>Add</button>
//         { todoError !== '' ? todoError : null }
//       </form>
//     </div>
//   )
// }


function TodoList(){
  const selectorOutput = useRecoilValue(toDoSelector);
  const addCategory = useRecoilValue(addCategoryState);
  const [ category, setCategory ] = useRecoilState(categoryState);
  
  function onInput(event:React.FormEvent<HTMLSelectElement>){
    setCategory(event.currentTarget.value as any);
  }

  return (
    <div>
      <h1>To Dos</h1>
      <hr/>
      <select value={category} onInput={onInput}>
        {addCategory?.map((ele, idx)=> {
          return <option key={idx} value={ele}>{ele}</option>
        })}
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateCategory/>
      <CreateTodo/>
      {selectorOutput?.map(todo => <ToDo key={todo.id} {...todo} />)}
    </div>
  )
}

export default TodoList;