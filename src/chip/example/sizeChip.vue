<template>
    <simples-wrap>
        <simples-chip size="large">大纸片</simples-chip>
        <simples-chip size="small">小纸片</simples-chip>
        <simples-chip size="mini">迷你纸片</simples-chip>
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