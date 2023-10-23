<template>
  <div>
    <!-- <div v-for="(ele,idx) in 블로그글" :key="idx">
      <h5>{{ 블로그글[idx].title }}</h5>
      <p>{{ 블로그글[idx].content }}</p>
      <p>{{ 블로그글[idx].date }}</p>
    </div>
  </div> -->
    <div>
      <h5>{{ 블로그글[idx].title }}</h5>
      <p>{{ 블로그글[idx].content }}</p>
      <p>{{ 블로그글[idx].date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ComList',
  props :{
    블로그글:Array,
    idx:Number
  }
}
</script>

<style>

</style>