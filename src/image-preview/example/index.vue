<template>
  <!-- 基本使用 -->
  <simples-button type="warning" block @click="show = true"
    >基本使用</simples-button
  >
  <simples-image-preview :images="images" v-model:show="show" />
  <!-- 指定初始位置 -->
  <simples-button type="warning" block @click="currentShow = true"
    >指定初始位置</simples-button
  >
  <simples-image-preview
    current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
    :images="images"
    v-model:currentShow="currentShow"
  />
</template>
 
<script setup>
import { ref } from "vue";
import SimplesImagePreview from "../ImagePreview.vue";
import SimplesButton from "../../button/Button.vue";
const show = ref(false);
const currentShow = ref(false);
const images = ref([
  "https://varlet.gitee.io/varlet-ui/cat.jpg",
  "https://varlet.gitee.io/varlet-ui/cat2.jpg",
]);
</script>
<style>
</style>
