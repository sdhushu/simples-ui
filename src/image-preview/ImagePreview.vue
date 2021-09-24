<template>
  <div
    class="simple-imgpreview"
    v-if="show || currentShow"
    @dblclick="handledbClick"
    @click="handleClick"
  >
    <div class="simple-img-wrap" :class="[double ? 'simple-double' : '']">
      <div class="simple-imgpreview-text" v-if="current">
        {{ num }}/{{ images.length }}
      </div>
      <img
        :src="images[`${num - 1}` || 0]"
        alt=""
        class="simple-img"
        v-if="images"
      />
    </div>
  </div>
</template>
 
<script>
import { ref } from "vue";
export default {
  name:'SimplesImagePreview',
  props: {
    show: Boolean,
    currentShow: Boolean,
    images: Object,
    current: String,
  },
  setup(props, context) {
    let time;
    let double = ref(false);
    let images = props.images ? Array.from(props.images) : "";
    let emits = context["emit"];
    let num = props.current
      ? images.findIndex((value) => value == props.current) + 1
      : 1;
    let handleClick = () => {
      clearTimeout(time);
      time = setTimeout(() => {
        props.show && !props.currentShow ? emits("update:show", false) : "";
        !props.show && props.currentShow
          ? emits("update:currentShow", false)
          : "";
      }, 300);
    };
    let handledbClick = () => {
      clearTimeout(time);
      double.value = !double.value;
    };
    return { images, num, double, handleClick, handledbClick };
  },
};
</script>
<style lang='css'>
.simple-imgpreview {
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.simple-img-wrap {
  width: 600px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
}
.simple-double {
  width: 800px;
  height: 800px;
}
.simple-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.simple-imgpreview-text {
  text-align: center;
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 50%;
}
</style>
