import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil';
import { addCategoryState } from '../atoms';

interface IForm {
  addCategory : string;
}

function CreateCategory(){
  const setAddCategory = useSetRecoilState(addCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  function onAddCat(data: IForm){
    const newCategory = data.addCategory;    
    setAddCategory(current => {
      return [...current, newCategory as any];
    });
    setValue('addCategory','');
  }

  return (
    <>
    <form onSubmit={handleSubmit(onAddCat)}>
      <input {...register('addCategory')} type="text" placeholder="Add Category"/>
      <button>Add Category</button>
    </form>
    </>
  )
}

export default CreateCategory;