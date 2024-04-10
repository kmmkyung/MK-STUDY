import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    increase(state, a){
      state.age += a.payload
    }
  }
}) 

export let { increase } = user.actions
export default user