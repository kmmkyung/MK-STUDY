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
    month(a){ // a는 month의 변경 후 데이터 / b는 변경 후 데이터
      // 사용자가 month에 입력한 데이터가 13보다 크면 경고문 띄우기
      if(a >= 13){
        alert('13이상 입력하지 마')
      }
      if(isNaN(a) == true){
        alert('문자입력하지마');
        this.month = 1;
      }
    }
  },
  props :{
    원룸:Array,
    누른거:Number,
    모달창:Boolean
  },
  beforeUpdate(){
    if (this.month == 2){
      alert('2개월은 너무 적음.. 안팝니다')
      this.month = 3;
    }
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