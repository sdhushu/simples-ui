<template>
    <simples-wrap>
        <simples-badge type="danger" value="badge" />
        <simples-badge type="danger" value="hot" />
        <simples-badge type="danger" value="66" />
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