<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step==1" v-on:click="step++">Next</li>
        <li v-if="step==2" v-on:click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <ComContainer :DataPost="DataPost" :step="step" :이미지="이미지" @write="작성한글 = $event"/>
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
      step : 0,
      이미지 : ''
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
      let url = URL.createObjectURL(파일[0])
      // console.log(url); // blob: http:// 링크~
      this.이미지 = url
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: "perpetua"
    };
      this.DataPost.unshift(내게시물)
      this.step = 0;
    }
  }
};
</script>

<style>
@import 'css/app.css';


</style>
