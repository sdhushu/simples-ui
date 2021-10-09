<template>
    <simples-wrap>
        <simples-chip type="primary">主要纸片</simples-chip>
        <simples-chip type="success">成功纸片</simples-chip>
        <simples-chip type="danger">危险纸片</simples-chip>
        <simples-chip type="warning">警告纸片</simples-chip>
        <simples-chip type="info">信息纸片</simples-chip>
        <simples-chip>默认纸片</simples-chip>
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