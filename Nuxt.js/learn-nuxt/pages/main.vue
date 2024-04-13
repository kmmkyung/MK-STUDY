<script setup>
  const {data:products} = await useFetch('http://localhost:3000/products');
</script>
<template>
  <div>
    <article>
      <div>{{ products }}</div>
    </article>
  </div>
</template>