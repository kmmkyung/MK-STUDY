<template>
  <div>
    <div class="menu">
      <a v-for="( ele, idx ) in 메뉴들" :key="idx">{{ ele }}</a>
    </div>

    <Transition name="fade">
      <Modol @closeModal="모달창=false" v-bind:원룸="원룸들" :누른거="누른거" :모달창="모달창"/>
    </Transition>
    
    <discountBanner v-if="showDiscount == true"/>
    
    <button @click="priceSort1">가격순</button>
    <button @click="priceSort2">가격역순</button>
    <button @click="priceSort3">가나다순</button>
    <button @click="sortBack">되돌리기</button>

    <CardRoom @openModal="모달창=true; 누른거=$event" v-bind:원룸들="원룸들[idx]" v-for="(ele,idx) in 원룸들" :key="idx"/>

  </div>
</template>

<script>
import oneRoom from './assets/oneroom.js';
import discountBanner from './Discount.vue';
import Modol from './Modal.vue';
import CardRoom from './CardRoom.vue';

export default {
  name: "App",
  data() {
    return {
      showDiscount:true,
      // 사용자가 몇번쨰 상품을 눌렀는지 기록하는 data = 누른거
      누른거: 0,
      메뉴들: ["Home", "Shop", "About"],
      원룸들 : oneRoom,
      원룸들오리지널: [...oneRoom],
      num : [1,0,0,0,0,0],
      모달창: false,
    };
  },
  methods: {
    btnNum(idx){
      this.num[idx] += 1;
    },
    priceSort1(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceSort2(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })
    },
    priceSort3(){
      this.원룸들.sort(function(a,b){
      return a.title > b.title ? 1 : -1
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    }
  },

  components: {
    discountBanner : discountBanner,
    Modol : Modol,
    CardRoom:CardRoom
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.start{
  opacity: 0;
  transition: all 1s
}

.end{
  opacity: 1;
}


/* 시작 */
.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  transform: translateY(0px);
}
/* 끝 */
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
