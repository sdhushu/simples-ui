<template>
    <simples-wrap>
        <simples-badge type="danger" :value="66" :max-value="99" />
        <simples-badge type="danger" :value="180" :max-value="99" />
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