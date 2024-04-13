<template>
  <div>
    <h1>메인페이지</h1>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: []
    }
  },

  asyncData(){},  

  async created(){
    let response = await axios.get('http://localhost:3000/products')
    this.products = response.data
  }
}
</script> 

<style lang="scss" scoped>

</style>