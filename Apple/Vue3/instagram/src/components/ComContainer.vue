<template>
  <div>
    <div v-if="step == 0">
      <ComPost v-for="(item, idx) in DataPost" :key="idx" :DataPost="item" :선택한필터="선택한필터"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div :class="선택한필터"
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="filters">
        <FilterBox :이미지="이미지" v-for="(필터,idx) in 필터들" :key="idx" :필터="필터">
          <template v-slot:name><span>{{ 필터 }}</span></template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div :class="선택한필터"
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import ComPost from "./ComPost.vue";
import FilterBox from "./FilterBox.vue";

export default {
  components: {
    ComPost: ComPost,
    FilterBox,
  },
  props: {
    DataPost: Array,
    step: Number,
    이미지: String,
    선택한필터: String
  },
  data() {
    return {
      필터들: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
