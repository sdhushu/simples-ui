<template>
  <app-type>主题色纸片</app-type>
  <simples-chip type="primary">主要纸片</simples-chip>
  <simples-chip type="success">成功纸片</simples-chip>
  <simples-chip type="danger">危险纸片</simples-chip>
  <simples-chip type="warning">警告纸片</simples-chip>
  <simples-chip type="info">信息纸片</simples-chip>
  <simples-chip>默认纸片</simples-chip>
  <!-- 简单纸片 -->
  <app-type>简单纸片</app-type>
  <simples-chip plain type="primary">简单纸片</simples-chip>
  <!-- 非圆角 -->
  <app-type>非圆角纸片</app-type>
  <simples-chip square type="primary">非圆角纸片</simples-chip>
  <!-- 纸片尺寸 -->
  <app-type>纸片尺寸</app-type>
  <simples-chip size="large">大纸片</simples-chip>
  <simples-chip size="small">小纸片</simples-chip>
  <simples-chip size="mini">迷你纸片</simples-chip>
  <!-- 块级纸片 -->
  <app-type>块级纸片</app-type>
  <simples-chip block type="success">成功纸片</simples-chip>
  <!-- 自定义颜色 -->
  <app-type>自定义颜色纸片</app-type>
  <simples-chip color="#009688">纸片</simples-chip>
  <simples-chip color="#009688" plain>纸片</simples-chip>
  <simples-chip color="#faecd8" text-color="#e6a23c" plain>纸片</simples-chip>
  <simples-chip color="#faecd8" text-color="#e6a23c">纸片</simples-chip>
  <!-- 可关闭纸片 -->
  <app-type>可关闭纸片</app-type>
  <simples-chip block type="success" @close="show = flase" v-if="show"
    >可关闭纸片</simples-chip
  >
</template>

<script setup>
import SimplesChip from "../Chip.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
import { ref } from "vue";

let show = ref(true);
</script>
<style>
.simple-chip {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
