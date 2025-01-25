import { useState } from "react";

function TodoList(){
  const [ todo, setTodo] = useState('')
  
  function onChange(event:React.FormEvent<HTMLInputElement>){
  const value = event.currentTarget.value;
  setTodo(value);
  }

  function onSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write a to do"/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoList;