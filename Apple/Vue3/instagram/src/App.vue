<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <ComContainer :DataPost="DataPost"/>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import ComContainer from './components/ComContainer.vue';
import DataPost from './assets/data/DataPost.js';

export default {
  name: "App",
  components: {
    ComContainer:ComContainer
  },
  data(){
    return{
      DataPost : DataPost
    }
  }
};
</script>

<style>
@import 'css/app.css';
</style>
