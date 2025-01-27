import { useState } from "react";
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit, formState } = useForm();
  
  function onValid(data: any){
    console.log(data);
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register('toDo',{required:'입력을 해주세요.', minLength: {value:10, message: '10글자 이상이여야 합니다.'}})} type="text" placeholder="Write a to do"/>
        <button>Add</button>
        {/* <span>{formState?.errors?.toDo?.message}</span> */}
      </form>
    </div>
  )
}

export default TodoList;