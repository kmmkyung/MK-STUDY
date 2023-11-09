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

    <ComContainer :DataPost="DataPost" :step="step"/>
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input v-on:change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <!-- <div v-if="step === 0">내용0</div>
    <div v-if="step === 1">내용1</div>
    <div v-if="step === 2">내용2</div> -->
    <button @click="step = 0">버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button>


  </div>
</template>

<script>
import ComContainer from './components/ComContainer.vue';
import axios from 'axios'
import DataPost from './assets/data/DataPost.js';

export default {
  name: "App",
  components: {
    ComContainer:ComContainer
  },
  data(){
    return{
      DataPost : DataPost,
      더보기 : 0,
      step : 0
    }
  },
  methods : {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`).then((결과)=>{
        console.log(결과.data);
        this.DataPost.push(결과.data)
        this.더보기++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);
      this.step++;
      URL.createObjectURL(파일[0])
    }
  }
};
</script>

<style>
@import 'css/app.css';


</style>
