<template>
  <div class="discount">
    <h4>지금 결제하면 {{amount}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "discountBanner",
  data(){
    return{
      amount : 3
    }
  },
  mounted(){
    setInterval(()=>{
      if(this.amount >=1){
        this.amount -= 1}
      else if(this.amount == 0){
        clearInterval()
      }
    },1000)
  }
}
</script>

<style>
.discount{
  background-color: #eee;
  padding: 10px;
  margin: 10px;
}
</style>

