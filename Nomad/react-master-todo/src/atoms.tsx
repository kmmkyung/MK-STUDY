import { atom, selector } from "recoil";

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ITodDo {
  text: string;
  category: Categories;
  id: number;
}

export const toDoState = atom<ITodDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('toDoItem') ??'[]')
})

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
})

export const addCategoryState = atom<Categories[]>({
  key: 'addCategory',
  default: [],
})

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get})=>{
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo)=> toDo.category === category);
  }
})
