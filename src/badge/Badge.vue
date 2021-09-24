<template>
  <div style="display: inline-block; position: relative">
    <span
      v-if="!hidden"
      class="simple-badge"
      :class="[
        type ? `simple-badge--${type}` : '',
        dot ? 'simple-badge--dot' : '',
        value ? 'simple-badge--value' : '',
        position ? `simple-position--${position}` : '',
      ]"
      :style="{ backgroundColor: color }"
      >{{ result || value || 0 }}</span
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimplesBadge",
  props: {
    type: String,
    dot: Boolean,
    value: String,
    maxValue: String,
    position: String,
    color: String,
    hidden: Boolean,
  },
  setup(props) {
    const result =
      props.value && props.maxValue
        ? props.value < props.maxValue
          ? props.value
          : "99+"
        : "";
    return { result };
  },
};
</script>
<style lang="css">
.simple-badge {
  padding: 0px 5px;
  border-radius: 50%;
  background-color: rgb(187, 187, 182);
  color: #fff;
  font-size: 12px;
}
.simple-position--right-top {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
}
.simple-position--right-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(50%) translateX(50%);
}
.simple-position--left-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%) translateX(-50%);
}
.simple-position--left-top {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
}
.simple-badge--dot {
  width: 8px;
  height: 8px;
  padding: 0;
}
.simple-badge--value {
  border-radius: 10px;
  padding: 3px 10px;
}
.simple-badge--primary {
  background-color: rgb(74, 130, 212);
}
.simple-badge--primary--color {
  color: rgb(74, 130, 212);
  border: 1px solid rgb(74, 130, 212);
}

.simple-badge--info {
  background-color: rgb(163, 191, 233);
}
.simple-badge--info--color {
  color: rgb(163, 191, 233);
  border: 1px solid rgb(163, 191, 233);
}
.simple-badge--success {
  background-color: rgb(92, 218, 180);
}

.simple-badge--success--color {
  color: rgb(92, 218, 180);
  border: 1px solid rgb(92, 218, 180);
}
.simple-badge--warning {
  background-color: rgb(221, 219, 77);
}
.simple-badge--warning--color {
  color: rgb(221, 219, 77);
  border: 1px solid rgb(221, 219, 77);
}
.simple-badge--danger {
  background-color: rgb(233, 56, 56);
}
.simple-badge--danger--color {
  color: rgb(233, 56, 56);
  border: 1px solid rgb(233, 56, 56);
}
</style>
