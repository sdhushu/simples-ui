<template>
  <simples-button type="warning" block @click="show = true"
    >基本使用</simples-button
  >
  <simples-dialog
    title="兰亭序"
    message="兰亭临帖 行书如行云流水"
    v-model:show="show"
  />
  <!-- <simples-button type="info" block @click="test()">基本使用</simples-button> -->
</template>
 
<script setup>
import SimplesButton from "../../button/Button.vue";
import SimplesDialog from "../Dialog.vue";
import Dialog from "../Dialog";
import { ref } from "vue";
const show = ref(false);
let test = () => {
  Dialog({
    title: "兰亭序",
    message: "兰亭临帖 行书如行云流水",
    confirmButton: false,
    cancelButton: false,
  });
};
</script>
<style>
</style>
