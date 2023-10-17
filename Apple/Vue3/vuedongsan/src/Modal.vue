<template>
  <div class="black-bg" v-if="모달창 == true">
  <div class="white-bg">
    <h4>{{원룸[누른거].title}}</h4>
    <p>{{원룸[누른거].content}}</p>
    <img :src= "원룸[누른거].image" class="roomImg">
    <p>{{ 원룸[누른거].price }}만원</p>
    <!-- <button v-on:click="모달창=false">닫기</button> -->
  </div>
</div>
</template>

<script>
export default {
  name:'ModalRoom',
  props :{
    원룸:Array,
    누른거:Number,
    모달창:Boolean
  }
}
</script>

<style>
.black-bg {
  width: 100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>