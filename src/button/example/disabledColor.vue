<template>
    <simples-wrap>
        <simples-button disabled>禁用按钮</simples-button>
        <simples-button disabled text outline>禁用按钮</simples-button>
        <simples-button disabled text>禁用按钮</simples-button>
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