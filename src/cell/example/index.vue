<template>
  <!-- 普通单元格 -->
  <app-type>基本使用</app-type>
  <simplecell>这是单元格</simplecell>
  <!-- 描述单元格 -->
  <app-type>显示描述</app-type>
  <simplecell title="这是单元格" desc="描述" />
  <!-- 边框单元格 -->
  <app-type>显示边框</app-type>
  <simplecell title="这是单元格" desc="描述" border />
</template>

<script setup>
import simplecell from "../Cell.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
</script>
<style>
</style>
