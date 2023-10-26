<template>
<div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">홈페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list">리스트페이지</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <router-link to="/">홈페이지</router-link>
  <router-link to="/list">리스트페이지</router-link>
  <div class="mt-4">
    <router-view :블로그글="블로그글" ></router-view>
  </div>

</div>
</template>

<script>
import blogData from './assets/blog.js';
// import ComList from './components/ComList.vue';
export default {
  name: "App",
  data(){
    return{
      블로그글 : blogData
    }
  },
  components: {
    // ComList : ComList,
  }
};
</script>

<style></style>
