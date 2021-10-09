<template>
    <simples-wrap>
        <simples-chip color="#009688">纸片</simples-chip>
        <simples-chip color="#009688" plain>纸片</simples-chip>
        <simples-chip color="#faecd8" text-color="#e6a23c" plain>纸片</simples-chip>
        <simples-chip color="#faecd8" text-color="#e6a23c">纸片</simples-chip>
    </simples-wrap>
</template>

<script setup>
import SimplesChip from '../Chip.vue'
import SimplesWrap from '../../wrap/wrap.vue'
</script>

<style>
.simple-chip {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>