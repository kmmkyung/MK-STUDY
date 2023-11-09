<template>
  <div>
    <ComPost />
    <ComPost />
    <ComPost />
  </div>
</template>

<script>
import ComPost from './ComPost.vue';

export default {
  components:{
    ComPost:ComPost
  },
  props : {
    DataPost : Array
  }
};
</script>

<style>
</style>

