<template>
  <div class="black-bg" v-if="모달창 == true">
  <div class="white-bg">
    <img :src= "원룸[누른거].image" class="roomImg">
    <h4>{{원룸[누른거].title}}</h4>
    <p>{{원룸[누른거].content}}</p>
    <input v-model.number="month" />
    <select v-model="month">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <p>{{ month }} 개월 선택함: {{ 원룸[누른거].price * month}}만원</p>
    <button @click="$emit('closeModal')">닫기</button>
  </div>
</div>
</template>

<script>
export default {
  name:'ModalRoom',
  data(){
    return{
      month: 1,
    }
  },
  watch:{
    mouth(){}
  },
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