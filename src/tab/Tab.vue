<template>
  <div class="simple-wrap" :ariaLabel="name" :class="[disabled?'simple-disabled':'']"> 
    <div class="simple-tab"><slot></slot></div>
  </div>
</template>
 
<script>
import { ref } from "vue";
export default {
  name: "SimplesTab",
  props: {
    name: String,
    disabled:Boolean,
  },
  setup(props, context) {
    let line = ref(0);
    return { line };
  },
};
</script>
<style lang="css">
.simple-tab {
  padding: 0 20px;
  font-size: 14px;
  /* color: #fff; */
  transition: 2s linear;
  cursor: pointer;
  white-space: nowrap;
}
.simple-wrap {
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
}
.simple-disabled {
  pointer-events: none;
}





</style>
