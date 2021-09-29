<template>
    <!-- 主题色按钮 -->
    <simples-wrap>
        <simples-button>默认按钮</simples-button>
        <simples-button type="primary">主要按钮</simples-button>
        <simples-button type="info">信息按钮</simples-button>
        <simples-button type="success">成功按钮</simples-button>
        <simples-button type="warning">警告按钮</simples-button>
        <simples-button type="danger">危险按钮</simples-button>
    </simples-wrap>
</template>

<script setup>
import SimplesButton from "../Button.vue";
import SimplesWrap from '../../wrap/wrap.vue'
import AppType from "@varlet/cli/site/mobile/components/AppType";
</script>

<style>
.simple-button {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>