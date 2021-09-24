<template>
  <!-- 基本使用 -->
  <app-type>基本使用</app-type>
  <simples-switch v-model="value"/>
  <!-- 不可用 -->
  <app-type>不可用</app-type>
  <simples-switch v-model="values" disabled />
  <!-- 自定义颜色 -->
  <!-- <app-type>自定义颜色</app-type>
  <simples-switch v-model="colorValue" color="#ff9f00" close-color="#f5cb90" /> -->
  <!-- 不同大小 -->
  <app-type>不同大小</app-type>
  <simples-switch v-model="value" width="100" height="30" cicle="40" />
</template>
 
<script setup>
import SimplesSwitch from "../Switch.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
import { ref } from "vue";
let value = ref(false);
let values = ref(true);
let colorValue = ref(false);
let handleClick =()=>{
  console.log(1)
}
</script>
<style>
</style>
