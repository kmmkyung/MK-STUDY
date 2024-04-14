<template>
  <div>
    <h1>상세페이지</h1>
    <div>
      {{ product }}
    </div>
  </div>
</template>

<script>
  import {fetchProductById} from '@/api/index'
  export default {
    async fetch({params}){
      const response = await fetchProductById(params.id);
      const product = response
      console.log(product);
      
      return {product}
    }
  }
</script>

<style lang="scss" scoped>

</style>