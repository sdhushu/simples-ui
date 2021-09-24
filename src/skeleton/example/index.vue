<template>
  <!-- 基本使用 -->
  <app-type>基本使用</app-type>
  <simple-skeleton :loading="loading"></simple-skeleton>
  <!-- 显示标题 -->
  <app-type>显示标题</app-type>
  <simple-skeleton
    title
    :loading="loading"

  ></simple-skeleton>
  <!-- 自定义段落高度 -->
  <app-type>自定义段落高度</app-type>
  <simple-skeleton
    title
    :rows="3"
    :loading="loading"
    :rows-width="['200px', '100px', '50px']"

  ></simple-skeleton>
  <!-- 显示头像 -->
  <app-type>显示头像</app-type>
  <simple-skeleton
    title
    avatar
    :loading="loading"
  ></simple-skeleton>
</template>
 
<script setup>
import { ref } from "vue";
import SimpleSkeleton from "../Skeleton.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
let loading = ref(true);
</script>
<style>
</style>
