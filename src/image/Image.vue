<template>
  <div :class="[block ? 'simple-img-block' : '']" class="simple-div">
    <img
      :src="src"
      :alt="alt"
      class="simple-img"
      :style="{ width: width, height: height, borderRadius: round }"
    />
  </div>
</template>

<script>
export default {
  name:'SimplesImg',
  props: {
    src: String,
    width: String,
    height: String,
    round: String,
    alt: String,
    block: Boolean,
  }
};
</script>
<style lang="css">
.simple-img {
  width: 100%;
  height: 100%;
}
.simple-div {
  display: inline-block;
}

.simple-img-block {
  display: block;
}
</style>
