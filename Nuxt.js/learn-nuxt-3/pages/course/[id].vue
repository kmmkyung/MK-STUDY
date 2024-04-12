<template>
  <q-page padding>
    <h2>Course</h2>
    {{ $route.params }}
  </q-page>
</template>

<script>
  const route = useRoute()
  console.log(route.params.id);
</script>

<style lang="scss" scoped>

</style>