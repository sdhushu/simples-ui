<template>
  <!-- 主题色按钮 -->
  <app-type>主题色按钮</app-type>
  <simples-button>默认按钮</simples-button>
  <simples-button type="primary">主要按钮</simples-button>
  <simples-button type="info">信息按钮</simples-button>
  <simples-button type="success">成功按钮</simples-button>
  <simples-button type="warning">警告按钮</simples-button>
  <simples-button type="danger">危险按钮</simples-button>
  <!-- 文字按钮 -->
   <app-type>文字按钮</app-type>
  <simples-button text outline type="primary">外边框按钮</simples-button>
  <simples-button text type="primary">纯文字按钮</simples-button>
  <!-- 禁用状态 -->
   <app-type>禁用状态</app-type>
  <simples-button disabled>禁用按钮</simples-button>
  <simples-button disabled text outline>禁用按钮</simples-button>
  <simples-button disabled text>禁用按钮</simples-button>
  <!-- 按钮尺寸 -->
   <app-type>按钮尺寸</app-type>
  <simples-button type="primary">常规按钮</simples-button>
  <simples-button type="success" size="small">小型按钮</simples-button>
  <simples-button type="warning" size="mini">迷你按钮</simples-button>
  <simples-button type="danger" size="large">大型按钮</simples-button>
  <!-- 块级按钮 -->
   <app-type>块级按钮</app-type>
  <simples-button block type="primary">块级按钮</simples-button>
  <!-- 自定义颜色 -->
   <app-type>自定义颜色</app-type>
  <simples-button color="#69dbaa" text-color="#eee">背景/文字</simples-button>
  <simples-button
    color="linear-gradient(to right, #69dbaa, #3a7afe)"
    text-color="#fff"
    >使用渐变</simples-button
  >
  <!-- 圆形按钮 -->
   <app-type>圆形按钮</app-type>
  <simples-button type="primary" round></simples-button>
  <!-- 加载按钮 -->
   <app-type>加载按钮</app-type>
  <simples-button type="primary" loading-type="circle">加载状态</simples-button>
  <simples-button type="info" loading-type="rect">加载状态</simples-button>
  <simples-button type="success" loading-type="disappear"
    >加载状态</simples-button
  >
  <simples-button type="warning" loading-type="cube">加载状态</simples-button>
  <simples-button type="danger" loading-type="wave">加载状态</simples-button>
</template>

<script setup>
import SimplesButton from "../Button.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
</script>

<style>
.simple-button {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
