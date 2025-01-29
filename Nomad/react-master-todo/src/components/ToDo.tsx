import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCategoryState, Categories, categoryState, ITodDo, toDoState } from "../atoms";

function ToDo(props: ITodDo){
  const setToDos = useSetRecoilState(toDoState);
  const addCategory = useRecoilValue(addCategoryState);
  const category = useRecoilValue(categoryState);


  function onClick(event:React.MouseEvent<HTMLButtonElement>){
    const { currentTarget:{name} } = event; 
    setToDos(pre => {
      // 1. find t0 d0 based id
      const targetIndex = pre.findIndex(toDo => toDo.id === props.id)
      // 2. preToDo change newToDo
      const newToDo = {text:props.text, id:props.id, category: name as Categories}
      return [...pre.slice(0,targetIndex), newToDo, ...pre.slice(targetIndex+1)];
    })
  }

  function onDelete(event:React.MouseEvent<HTMLButtonElement>){
    setToDos(pre => {
      const newTodo = [...pre]
      const targetIndex = pre.findIndex(toDo => toDo.id === props.id)
      newTodo.splice(targetIndex,1)
      return newTodo;
    });
  }

  return (
    <li>
      <span>{props.text}</span>
      {props.category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
      {props.category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
      {props.category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
      { addCategory?.filter( cat => cat !== category ).map((ele,idx) => <button name={ele} key={idx} onClick={onClick}>{ele}</button>) }
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default ToDo;