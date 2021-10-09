<template>
    <simples-wrap>
        <simples-skeleton :loading="loading"></simples-skeleton>
    </simples-wrap>
</template>

<script setup>
import SimplesSkeleton from "../Skeleton.vue";
import SimplesWrap from '../../wrap/wrap.vue'
import { ref } from "vue";
let loading = ref(true);
</script>

<style>

</style>