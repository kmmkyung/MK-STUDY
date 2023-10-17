<template>
  <div>

    <Modol v-bind:원룸="원룸들" :누른거="누른거" :모달창="모달창"/>

    <div class="menu">
      <a v-for="( ele, idx ) in 메뉴들" :key="idx">{{ ele }}</a>
    </div>

    <discountBanner/>
    <CardRoom v-bind:원룸들="원룸들[idx]" v-for="(ele,idx) in 원룸들" :key="idx"/>
  </div>
</template>

<script>
import oneroom from './assets/oneroom.js';
import discountBanner from './Discount.vue';
import Modol from './Modal.vue';
import CardRoom from './CardRoom.vue';

export default {
  name: "App",
  data() {
    return {
      // 사용자가 몇번쨰 상품을 눌렀는지 기록하는 data = 누른거
      누른거: 0,
      메뉴들: ["Home", "Shop", "About"],
      원룸들 : oneroom,
      num : [1,0,0,0,0,0],
      모달창: false,
    };
  },
  methods: {
    btnNum(idx){
      this.num[idx] += 1;
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


</style>
