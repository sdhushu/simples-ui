<template>
    <simples-wrap>
        <simples-button @click="handleChange">点击改变状态</simples-button>
        <simples-badge type="danger" color="#6200ea" position="left-bottom" :hidden="hidden">
            <simples-chip color="#faecd8" square text-color="#e6a23c" plain>右上</simples-chip>
        </simples-badge>
    </simples-wrap>
</template>

<script setup>
import SimplesButton from '../../button/Button.vue'
import SimplesBadge from '../Badge.vue'
import SimplesWrap from '../../wrap/wrap.vue'
import SimplesChip from '../../chip/Chip.vue'
import { ref } from "vue";

const hidden = ref(false);
const handleChange = () => {
  hidden.value = !hidden.value;
};
</script>

<style>
.simple-chip {
    margin-bottom: 10px;
    /* margin-left: 30px; */
}
</style>