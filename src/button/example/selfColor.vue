<template>
    <simples-wrap>
        <simples-button color="#69dbaa" text-color="#eee">背景/文字</simples-button>
        <simples-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">使用渐变</simples-button>
    </simples-wrap>
</template>

<script setup>
import SimplesButton from "../Button.vue";
import SimplesWrap from '../../wrap/wrap.vue'
</script>

<style>
.simple-button {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>