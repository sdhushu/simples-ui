<template>
    <simples-wrap>
        <simples-button type="primary">常规按钮</simples-button>
        <simples-button type="success" size="small">小型按钮</simples-button>
        <simples-button type="warning" size="mini">迷你按钮</simples-button>
        <simples-button type="danger" size="large">大型按钮</simples-button>
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