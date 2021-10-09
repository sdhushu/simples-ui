<template>
    <simples-wrap>
        <simples-input placeholder="请输入文本" readonly v-model="values" />
    </simples-wrap>
</template>

<script setup>
import SimplesInput from "../Input.vue";
import SimplesWrap from '../../wrap/wrap.vue'
</script>

<style>
</style>