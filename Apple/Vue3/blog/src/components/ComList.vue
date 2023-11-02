<template>
  <div>
    <div v-for="(ele,idx) in 블로그글" :key="idx">
      <h5 v-on:click="$router.push(`./detail/${idx}`)">{{ 블로그글[idx].title }}</h5>
      <p>{{ 블로그글[idx].content }}</p>
      <p>{{ 블로그글[idx].date }}</p>
    </div>
    <!-- <div>
      <h5 @click="$router.push('./detail/0')">{{ 블로그글[0].title }}</h5>
      <p>{{ 블로그글[0].content }}</p>
      <p>{{ 블로그글[0].date }}</p>
    </div>
    <div>
      <h5>{{ 블로그글[1].title }}</h5>
      <p>{{ 블로그글[1].content }}</p>
      <p>{{ 블로그글[1].date }}</p>
    </div>
    <div>
      <h5>{{ 블로그글[2].title }}</h5>
      <p>{{ 블로그글[2].content }}</p>
      <p>{{ 블로그글[2].date }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name : 'ComList',
  props :{
    블로그글:Array,
  }
}
</script>

<style>

</style>