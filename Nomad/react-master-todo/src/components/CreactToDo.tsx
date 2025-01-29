import {useForm} from 'react-hook-form'
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import { useEffect } from 'react';

interface IForm {
  toDo: string;
}

function CreateTodo(){
  const [ toDos, setToDos ] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  function onValid(data: IForm){
    setToDos(pre => [...pre, {text:data.toDo, category: category, id: Date.now()}])
    setValue('toDo', '');
  }

  useEffect(()=>{
    localStorage.setItem('toDoItem',JSON.stringify(toDos));
  },[toDos])

  return (
    <>
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('toDo')} type="text" placeholder="Write a to do"/>
      <button>Add To Do</button>
    </form>
    </>
  )
}

export default CreateTodo;