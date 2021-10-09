<template>
    <simples-wrap>
        <simples-badge type="primary" />
        <simples-badge type="info" />
        <simples-badge type="success" />
        <simples-badge type="warning" />
        <simples-badge type="danger" />
    </simples-wrap>
</template>

<script setup>
import SimplesBadge from '../Badge.vue'
import SimplesWrap from '../../wrap/wrap.vue'
</script>

<style>
.simple-badge {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>