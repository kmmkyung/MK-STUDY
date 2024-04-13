<template>
  <div>
    {{ products }}
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    }
  },
  async fetch(){
    const response = await axios.get("http://localhost:3000/products");
    this.products = response.data
    return {products}
  }
}
</script>
<style>
</style>