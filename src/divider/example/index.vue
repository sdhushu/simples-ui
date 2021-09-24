<template>
  <app-type>基本使用</app-type>
  <simples-divider />
  <app-type>虚线</app-type>
  <simples-divider dashed />
  <app-type>垂直分割线</app-type>
  <div style="display: flex; justify-content: center">
    <span>文字</span>
    <simples-divider vertical />
    <span>文字</span>
    <simples-divider vertical />
    <span>文字</span>
  </div>
</template>
 
<script setup>
import SimplesDivider from "../Divider.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
</script>
<style>
</style>




