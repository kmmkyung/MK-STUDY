<template>
  <div>
    <div class="menu">
      <a v-for="( ele, idx ) in 메뉴들" :key="idx">{{ ele }}</a>
      <!-- 메뉴들 갯수만큼 반복되고 a는 메뉴들의 자료로 변경된다 -->
      <!-- 왼쪽은 하나하나의 데이터 오른쪽은 1씩 증가하는 정수가 된다 -->
    </div>
    <div v-for="( ele, idx ) in products" :key="idx">
      <img :src= "ele.img" class="roomimg">
      <h4>{{ products[idx].name }}</h4>
      <p>{{ ele.price }}만원</p>
      <button v-on:click="btnNum(idx)">허위매물신고</button>
      <span>신고수: {{ num[idx] }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      products: [
      { name: '역삼동원룸', price: '50', img: require('./assets/room0.jpg')},
      { name: '천호동원룸', price: '20', img: require('./assets/room1.jpg')},
      { name: '마포구원룸', price: '40', img: require('./assets/room2.jpg')}
      ],
      num : [1,0,0],
    };
  },
  methods: {
    btnNum(idx){
      this.num[idx] += 1;
    }
  },
  components: {},
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
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
.roomimg{
  width: 100%;
  margin-top: 40px;
}
</style>
