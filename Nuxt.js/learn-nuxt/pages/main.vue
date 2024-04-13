<template>
  <div>
    <h1>메인페이지</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async created(){
    let response = await axios.get('http://localhost:3000/products')
    console.log(response);
  }
}
</script> 

<style lang="scss" scoped>

</style>