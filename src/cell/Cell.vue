<template>
  <div class="simple-cell" :class="[border ? 'simple-border' : '']">
    <slot name="left"></slot>{{ title }}
    <span v-if="!title"><slot></slot></span>
    <div v-if="desc" class="simple-desc">{{ desc }}</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name:'SimplesCell',
  props: {
    title: String,
    desc: String,
    border: Boolean,
  },
};
</script>
<style lang="css">
.simple-cell {
  align-items: center;
  font-size: 14px;
}
.simple-border {
  border-bottom: 1px solid rgb(168, 168, 164);
}
.simple-desc {
  font-size: 12px;
  color: rgb(168, 168, 164);
}
</style>
