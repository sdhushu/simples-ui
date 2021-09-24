<template>
  <span
    class="simple-chip"
    :class="[
      type ? `simple-chip--${type} text-color` : '',
      type && plain ? `simple-chip--${type}--color` : '',
      square ? 'simple-chip-square' : '',
      size ? `simple-chip--${size}` : '',
      block ? 'simple-chip--block' : '',
      (color && plain) || (plain && textColor) ? 'simple-plain' : '',
    ]"
    :style="{ backgroundColor: colors, color: textColor }"
    @click="handleClick"
  >
    <slot name="left"></slot>
    <span><slot></slot></span>
    <slot name="right"></slot>
  </span>
</template>

<script>
import {} from "vue";
export default {
  name: "SimplesChip",
  props: {
    type: String,
    plain: Boolean,
    square: Boolean,
    size: String,
    block: Boolean,
    color: String,
    textColor: String,
  },
  setup(props, context) {
    let colors = props.plain ? "" : props.color;
    const emits = context["emit"];
    let handleClick = () => {
      emits("close");
    };
    return { colors, handleClick };
  },
};
</script>
<style lang="css">
.simple-chip {
  width: auto;
  height: 35px;
  padding: 0 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 13px;
  box-shadow: 0px 0px 3px gray;
  font-family: inherit;
  font-size: 14px;
  line-height: 35px;
  display: inline-block;
  background-color: rgb(238, 238, 238);
}
.simple-plain {
  background-color: #fff;
}
.text-color {
  color: #fff;
}
.simple-chip--primary {
  background-color: #3DB2FF;
}
.simple-chip--primary--color {
  color: #3DB2FF;
  background-color: #fff;
  /* box-shadow: none; */
}

.simple-chip--info {
  background-color: rgb(163, 191, 233);
}
.simple-chip--info--color {
  color: rgb(163, 191, 233);
  background-color: #fff;
}
.simple-chip--success {
  background-color: rgb(92, 218, 180);
}

.simple-chip--success--color {
  color: rgb(92, 218, 180);
  background-color: #fff;
}
.simple-chip--warning {
  background-color: #FFB830;
}
.simple-chip--warning--color {
  color: #FFB830;
  background-color: #fff;
}
.simple-chip--danger {
  background-color: #FF2442;
}
.simple-chip--danger--color {
  color: #FF2442;
  background-color: #fff;
}
.simple-chip-square {
  border-radius: 0;
}
.simple-chip--small {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
.simple-chip--mini {
  font-size: 8px;
  height: 25px;
  line-height: 25px;
}
.simple-chip--large {
  font-size: 18px;
  height: 45px;
  line-height: 45px;
}
.simple-chip--block {
  display: block;
}
</style>
