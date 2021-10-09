<template>
    <simples-wrap>
        <simples-badge type="danger" position="right-top">
            <simples-chip color="#faecd8" square text-color="#e6a23c" plain>右上</simples-chip>
        </simples-badge>

        <simples-badge type="danger" position="right-bottom" class="badge">
            <simples-chip color="#faecd8" square text-color="#e6a23c" plain>右下</simples-chip>
        </simples-badge>

        <simples-badge type="danger" position="left-top" class="badge">
            <simples-chip color="#faecd8" square text-color="#e6a23c" plain>左上</simples-chip>
        </simples-badge>

         <simples-badge type="danger" position="left-bottom" class="badge">
            <simples-chip color="#faecd8" square text-color="#e6a23c" plain>左下</simples-chip>
        </simples-badge>
    </simples-wrap>
</template>

<script setup>
import SimplesBadge from '../Badge.vue'
import SimplesChip from '../../chip/Chip.vue'
import SimplesWrap from '../../wrap/wrap.vue'
</script>

<style>

</style>