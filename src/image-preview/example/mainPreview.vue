<template>
    <simples-wrap>
        <simples-button type="warning" block @click="show = true">基本使用</simples-button>
        <simples-image-preview :images="images" v-model:show="show" />
        <!-- 指定初始位置 -->
        <simples-button type="warning" block @click="currentShow = true">指定初始位置</simples-button>
    </simples-wrap>
</template>

<script setup>
import SimplesButton from "../../button/Button.vue";
import SimplesWrap from '../../wrap/wrap.vue'
import SimplesImagePreview from '../ImagePreview.vue'

import { ref } from "vue";
const show = ref(false);
const currentShow = ref(false);
const images = ref([
  "https://varlet.gitee.io/varlet-ui/cat.jpg",
  "https://varlet.gitee.io/varlet-ui/cat2.jpg",
]);
</script>

<style>
</style>