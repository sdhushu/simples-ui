<template>
  <div :class="[vertical ? 'simple-hr--vertical' : '']">
    <hr
      v-if="!vertical"
      class="simple-hr"
      :class="[dashed ? 'simple-hr--dashed' : '']"
    />
  </div>
</template>
 
<script>
export default {
  name:'SimpleDivider',
  props: {
    dashed: Boolean,
    vertical: Boolean,
  },
};
</script>
<style lang="css">
.simple-hr {
  color: rgb(219, 224, 223);
}
.simple-hr--dashed {
  border: 1px dashed rgb(219, 224, 223);
}
.simple-hr--vertical {
  /* width: 1px; */
  height: 30px;
  border-left: 1px solid gray;
  display: inline-block;
}
</style>
