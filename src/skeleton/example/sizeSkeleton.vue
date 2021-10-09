<template>
    <simples-wrap>
        <simples-skeleton
            title
            :rows="3"
            :loading="loading"
            :rows-width="['200px', '100px', '50px']"
        ></simples-skeleton>
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