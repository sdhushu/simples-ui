<template>
    <simples-wrap>
        <simples-button text outline type="primary">外边框按钮</simples-button>
        <simples-button text type="primary">纯文字按钮</simples-button>
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