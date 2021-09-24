<template>
  <div
    class="simple-skeleton"
    :class="[avatar ? 'simple-skeleton--avatar' : '']"
  >
    <div class="simple-skeleton--logo" v-if="avatar">
      <div class="logo"><div v-if="loading" class="simple-skeleton--animation"></div></div>
    </div>
    <div :class="[avatar ? 'simple-item--wrap' : '']">
      <div class="simple-skeleton--item simple-skeleton--title" v-if="title">
        <div v-if="loading" class="simple-skeleton--animation"></div>
      </div>
      <div
        class="simple-skeleton--item"
        v-if="!rows || (rows && rows >= 1)"
        :style="{ width: rowsWidth[0] }"
      >
        <div v-if="loading" class="simple-skeleton--animation"></div>
      </div>
      <div
        class="simple-skeleton--item"
        v-if="!rows || (rows && rows >= 2)"
        :style="{ width: rowsWidth[1] }"
      >
        <div v-if="loading" class="simple-skeleton--animation"></div>
      </div>
      <div
        class="simple-skeleton--item"
        v-if="!rows || (rows && rows >= 3)"
        :style="{ width: rowsWidth[2] }"
      >
        <div v-if="loading" class="simple-skeleton--animation"></div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { ref } from "vue";
export default {
  name:'SimplesSkeleton',
  props: {
    loading: Boolean,
    title: Boolean,
    rows: Number,
    rowsWidth: Object,
    avatar: Boolean,
    card: Boolean,
  },
  setup(props, content) {
    let rowsWidth = props.rowsWidth ? Array.from(props.rowsWidth) : "";
    return { rowsWidth };
  },
};
</script>
<style lang="css">
.simple-skeleton {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.simple-skeleton--item {
  width: 100%;
  height: 15px;
  border-radius: 15px;
  background-color: #e0e0e0;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
}
.simple-skeleton--animation::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  animation: simple-skeleton--animation 2s infinite;
}
.simple-skeleton--title {
  width: 40%;
}
.simple-skeleton--avatar {
  flex-direction: row;
}
.simple-item--wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 92%;
}
.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
}

@keyframes simple-skeleton--animation {
  0% {
    width: 0%;
    background-color: #e0e0e0;
    opacity: 0.3;
  }
  100% {
    width: 100%;
    opacity: 0.3;
    background-color: #fff;
  }
}
</style>
