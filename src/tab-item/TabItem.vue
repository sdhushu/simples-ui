<template>
    <div class="simples-tab-item" ref="ItemRef"><slot></slot></div>
</template>
 
<script>
import { onMounted, ref } from "vue";
export default {
  name: "SimplesTabItem",
  props: {
      name:String
  },
  setup(props, context) {
      let ItemRef = ref(null);
      onMounted(()=>{
          ItemRef.value.ariaLabel = props.name
      })
      return {ItemRef}
  },
};
</script>
<style lang="css">
.simples-tab-item {
    width: 100%;
    height: 100%;
    flex: none;
    /* transform: translateX(-1280px); */
}
</style>
