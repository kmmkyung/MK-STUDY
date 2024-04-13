<template>
  <div>
    <h1>{{ $route.name }} 페이지</h1>
    <NuxtLink to="/">홈페이지</NuxtLink>
    <NuxtLink to="/main">메인페이지</NuxtLink>
    <NuxtLink to="/product">상품페이지</NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script>
  export default {
    created(){
      console.log(this.$route);
    }
  }
</script>

<style lang="scss" scoped>

</style>