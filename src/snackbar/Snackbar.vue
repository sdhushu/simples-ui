<template>
  <div>
    <div
      class="simple-snackbar"
      :class="[
        slots ? 'simple-snackbar--height' : '',
        type ? `simple-snackbar--${type}` : '',
      ]"
      :style="{ display: query }"
    >
      {{ message }}<slot></slot>
      <div class="simple-snackbar--snackbar"><slot name="action"></slot></div>
    </div>
  </div>
</template>
 
<script>
import { ref, watch, useSlots } from "vue";
export default {
  name:'SimplesSnackbar',
  props: {
    show: Boolean,
    duration: Number,
    message: String,
    type: String,
  },
  setup(props, context) {
    const emits = context["emit"];
    let query = ref("none");
    let changes = () => {
      query.value = "block";
      setTimeout(() => {
        query.value = "none";
        emits("update:show", false);
      }, props.duration || 3000);
    };
    props.show ? changes() : (query.value = "none");
    let slots = useSlots().action ? true : false;
    watch(props, (newProps) => {
      newProps.show ? changes() : (query.value = "none");
    });
    return { query, slots, changes };
  },
};
</script>
<style lang="css">
.simple-snackbar {
  width: 200px;
  /* height: 55px; */
  padding: 10px;
  background-color: #333;
  color: rgba(255, 255, 255, 0.87);
  border-radius: 3px;
  position: absolute;
  top: 0;
  right: 0;
}
.simple-snackbar--height {
  height: 55px;
}
.simple-snackbar--snackbar {
  position: absolute;
  right: 10px;
}

.text-color {
  color: #fff;
}
.simple-snackbar--primary {
  background-color: rgb(74, 130, 212);
}

.simple-snackbar--info {
  background-color: rgb(163, 191, 233);
}

.simple-snackbar--success {
  background-color: rgb(92, 218, 180);
}

.simple-snackbar--warning {
  background-color: rgb(221, 219, 77);
}

.simple-snackbar--danger {
  background-color: rgb(233, 56, 56);
}
</style>
