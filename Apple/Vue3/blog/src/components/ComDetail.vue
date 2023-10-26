<template>
  <div>
    <h2>상세페이지{{ $route.params.id }}</h2>
    <h5>{{ 블로그글[$route.params.id].title }}</h5>
    <p>상세페이지임</p>
  </div>
</template>

<script>
export default {
  props :{
    블로그글:Array,
  }
}
</script>

<style>

</style>