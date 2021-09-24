<template>
  <app-type>基础加载</app-type>
  <simples-loading type="circle" />
  <simples-loading type="cube" />
  <simples-loading type="wave" />
  <simples-loading type="rect" />
  <simples-loading type="disappear" />
  <app-type>自定义颜色</app-type>
  <simples-loading type="circle" color=" #2979ff" />
  <simples-loading type="cube" color=" #2979ff" />
  <simples-loading type="wave" color=" #2979ff" />
  <simples-loading type="rect" color=" #2979ff" />
  <simples-loading type="disappear" color=" #2979ff" />
  <app-type>自定义大小</app-type>
  <simples-loading type="rect" color=" #2979ff" width="80px"  height="90px"/>
  <simples-loading type="disappear" color=" #2979ff" width="120px"  height="100px"/>
</template>

<script setup>
import SimplesLoading from "../Loading.vue";
import AppType from '@varlet/cli/site/mobile/components/AppType'
</script>
<style>
</style>


