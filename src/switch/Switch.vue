<template>
  <div class="simple-switch">
    <div
      class="simple-switch--warp"
      :class="[modelValue ? 'simple-switch--warp-r' : '']"
      @click="handleClick"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <div
        class="simple-switch--item"
        :class="[modelValue ? 'simple-switch--item-r' : '']"
        :style="{ width: cicle + 'px', height: cicle + 'px' }"
      ></div>
    </div>
  </div>
</template>
 
<script>
// import simpleloading from "./Loading.vue";

export default {
  name: "SimplesSwitch",
  // components: [simpleloading],
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    color: String,
    closeColor: String,
    width: String,
    height: String,
    cicle: String,
    loading: Boolean,
  },
  setup(props, context) {
    const emits = context["emit"];
    let handleClick = () => {
      if (!props.disabled) {
        emits("update:modelValue", !props.modelValue);
      }
    }
    return {handleClick}
  }
};
</script>
<style lang="css">
.simple-switch--warp {
  position: relative;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(212, 211, 211);
}
.simple-switch--item {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  top: -15%;
  box-shadow: 0px 0px 3px gray;
}
.simple-switch--item-r {
  background-color: rgb(19, 145, 196);
  right: 0%;
}
.simple-switch--warp-r {
  background-color: skyblue;
}
.simple-switch {
  width: 80px;
  height: 30px;
}
</style>
