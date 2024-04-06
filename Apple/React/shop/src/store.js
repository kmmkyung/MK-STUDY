import {configureStore,createSlice} from '@reduxjs/toolkit'

let userName = createSlice({ // state 저장 공간
  name : 'user', // state 이름 작명하기
  initialState : 'kim' // state 데이터
})

let cartData = createSlice({ // state 저장 공간
  name : 'cart',
  initialState : [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
] 
})

export default configureStore({
  reducer:{
    userNameState : userName.reducer,
    cartData: cartData.reducer
  }
})