import { useForm } from 'react-hook-form'

interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  PasswordConfirm: string;
  extraError?: string;
}

function Login(){
  const { register, handleSubmit, formState, setError } = useForm<IForm>({
    defaultValues:{
      Email:'@gmail.com'
    }
  });

  function onSubmit(data:IForm){
    if( data.Password !== data.PasswordConfirm ){
      setError('PasswordConfirm', { message: 'Password are not same as Password'},{shouldFocus: true})
    }
    // setError('extraError', { message:'Server error'})
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        {...register('Email',
          {required:"Email을 입력해 주세요",
            pattern:{
              value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,
              message: '올바른 이메일 형식이 아닙니다.'
        }})} type="text" placeholder='Email'/>
        <span>{formState.errors.Email?.message}</span>

        <input {...register('FirstName',
          {required:"first Name을 입력해 주세요",
            validate:{
              noKim: (value)=>value.includes('kim')? 'kim은 불가능': true,
              noPark: (value)=>value.includes('Park')? 'Park은 불가능': true,
            }})}
          // kim이라면 오류나게 함
          type="text" placeholder='first Name' />
        <span>{formState.errors.FirstName?.message}</span>

        <input {...register('LastName',
          {required:"Last Name을 입력해 주세요"})}
          type="text" placeholder='Last Name' />
          
        <input {...register('UserName',
          {required:"User Name을 입력해 주세요",
            minLength:{
              value: 2,
              message: '2글자 이상이여야 합니다.'
          }})}
          type="text" placeholder='User Name' />

        <input {...register('Password',
        {required:"비밀번호를 입력해 주세요",
            minLength:{
              value: 5,
              message: '5글자 이상이여야 합니다.'
          }})} type="password" placeholder='비밀번호를 입력해 주세요.'/>

        <input {...register('PasswordConfirm',
        {required:"재확인용 비밀번호를 입력해 주세요",
            minLength:{
              value: 5,
              message: '5글자 이상이여야 합니다.'
        }})} type="password" placeholder='재확인용 비밀번호를 입력해 주세요.'/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Login;