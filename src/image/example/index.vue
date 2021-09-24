<template>
<!-- 基本使用 -->
<app-type>基本使用</app-type>
<simples-img src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<!-- 设置宽高 -->
<app-type>设置宽高</app-type>
<simples-img width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<!-- 设置圆角 -->
<app-type>设置圆角</app-type>
<simples-img width="85px" height="85px" round="10px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<simples-img width="85px" height="85px" round="50%" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<app-type>块级元素</app-type>
<simples-img width="85px" height="85px" round="50%" block src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
</template>

<script setup>
import SimplesImg from "../Image.vue"
import AppType from '@varlet/cli/site/mobile/components/AppType'
</script>
<style>
</style>


