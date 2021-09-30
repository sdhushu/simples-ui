<template>
    <simples-wrap>
        <simples-button type="primary" loading-type="circle">加载状态</simples-button>
        <simples-button type="info" loading-type="rect">加载状态</simples-button>
        <simples-button type="success" loading-type="disappear">加载状态</simples-button>
        <simples-button type="warning" loading-type="cube">加载状态</simples-button>
        <simples-button type="danger" loading-type="wave">加载状态</simples-button>
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