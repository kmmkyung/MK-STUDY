import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name :'kim',
      age: 20,
      likes: [30,40,50],
      click: [0,0,0],
      num: [0,0,0],
      more : {},
    }
  },

  mutations : { // state 수정방법 정의하는 곳
    이름변경(state){
      state.name = 'park';
    },
    숫자변경(state,data){
      state.age += data
    },
    likePlus(state,data){
      if(state.click[data] == 0){
        state.click[data] = 1;
        state.likes[data] += 1;
      }
      else if(state.click[data] == 1){
        state.click[data] = 0;
        state.likes[data] -= 1;
      }
    },
    plus(state,data){
      state.num[data]++;
    },
    setMore(state,data){
      state.more = data
    }
  },

  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore',a.data)
      })
    },
  }
})

export default store