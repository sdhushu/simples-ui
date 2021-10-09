<template>
    <simples-wrap>
        <simples-chip block type="success" @close="show = flase" v-if="show">可关闭纸片</simples-chip>
    </simples-wrap>
</template>

<script setup>
import SimplesChip from '../Chip.vue'
import SimplesWrap from '../../wrap/wrap.vue'
import { ref } from "vue";
let show = ref(true);
</script>

<style>
.simple-chip {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>