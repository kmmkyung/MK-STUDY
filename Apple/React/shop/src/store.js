import {configureStore,createSlice} from '@reduxjs/toolkit'

import userName from './store/userSlice'

let cartData = createSlice({ // state 저장 공간
  name : 'cart',
  initialState : [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers:{
    changeNum(state,action){
      let 번호 = state.findIndex((a)=>{return a.id == action.payload})
      state[번호].count++;
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})

export let { changeNum , addItem } = cartData.actions

export default configureStore({
  reducer:{
    userNameState : userName.reducer,
    cartData: cartData.reducer
  }
})