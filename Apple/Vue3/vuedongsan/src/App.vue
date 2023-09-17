<template>
  <div>
    <div class="menu">
      <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
      <!-- 메뉴들 갯수만큼 반복되고 a는 메뉴들의 자료로 변경된다 -->
      <!-- 왼쪽은 하나하나의 데이터 오른쪽은 1씩 증가하는 정수가 된다 -->
    </div>
    <div>
      <h4>{{ products[0] }}</h4>
      <p>50만원</p>
    </div>
    <div>
      <h4>{{ products[1] }}</h4>
      <p>50만원</p>
    </div>
    <div>
      <h4>{{ products[2] }}</h4>
      <p>50만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      메뉴들: ["Home", "Shop", "About"],
    };
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
</style>
