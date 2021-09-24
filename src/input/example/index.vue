<template>
  <app-type>基本使用</app-type>
  <simples-input placeholder="请输入文本" v-model="values" />
  <app-type>朴素模式</app-type>
  <simples-input placeholder="请输入文本" line v-model="values" />
  <app-type>文本域</app-type>
  <simples-input placeholder="请输入文本" textarea v-model="values" />
  <app-type>最大长度</app-type>
  <simples-input placeholder="请输入文本" :maxlength="10" v-model="values" />
  <app-type>禁用</app-type>
  <simples-input placeholder="请输入文本" disabled v-model="values" />
  <app-type>只读</app-type>
  <simples-input placeholder="请输入文本" readonly v-model="values" />

</template>
 
<script setup>
import SimplesInput from "../Input.vue";
import AppType from "@varlet/cli/site/mobile/components/AppType";
import { ref } from "vue";
const values = ref("");
</script>
<style>
</style>


