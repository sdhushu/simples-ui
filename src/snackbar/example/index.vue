<template>
<!-- 基本使用 -->
  <simplebutton type="primary" block @click="show = !show">显示时长</simplebutton>
  <!-- <simplesnackbar v-model:show="show">这是一个消息条！！</simplesnackbar> -->
  <!-- 垂直排列 -->
  <simplesnackbar v-model:show="show">这是一个消息条！！
    <template #action>
    <simplebutton type="primary"  @click="show = !show">关闭</simplebutton>
  </template>
  </simplesnackbar>
    <!-- <simplesnackbar v-model:show="show" :duration="1000">这是一个消息条！！</simplesnackbar> -->
  <simplebutton  @click="test">按钮</simplebutton>
</template>
 
<script setup>
import simplebutton from "../../button/Button.vue";
import simplesnackbar from "../Snackbar.vue";
import createSnackbar from "../Snackbar"
import {ref} from 'vue'
const show = ref(false)
let test = ()=>{
  // createSnackbar('这是一条消息')
  // createSnackbar({
  //   message:'这是一条消息',
  //   duration:1000
  // })
  createSnackbar.info('这是一条消息')
}
</script>
<style>
</style>
