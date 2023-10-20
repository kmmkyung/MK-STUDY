<template>
  <div>
    <img :src= "원룸들.image" class="roomImg">
    <h4 v-on:click="send">{{ 원룸들.title }}</h4>
    <p>{{ 원룸들.price }}만원</p>
  </div>
</template>

<script>
export default {
  name:'CardRoom',
  props:{
    원룸들:Object,
  },
  methods:{
    send(){
      this.$emit('openModal', this.원룸들.id )
    }
  }
}
</script>

<style>
  .roomImg{
    width: 100%;
    margin-top: 40px;
  }
</style>