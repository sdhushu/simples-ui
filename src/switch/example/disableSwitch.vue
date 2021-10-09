<template>
    <simples-wrap>
        <simples-switch v-model="values" disabled />
    </simples-wrap>
</template>

<script setup>
import SimplesSwitch from "../Switch.vue";
import SimplesWrap from '../../wrap/wrap.vue'
import { ref } from "vue";
let value = ref(false);
let values = ref(true);
let colorValue = ref(false);
let handleClick = () => {
    console.log(1)
}
</script>

<style>
</style>