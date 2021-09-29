<template>
  <div
    :class="show ? 'box' : ''"
    :style="{ display: query }"
    @click.self="handleClose()"
  >
    <div v-if="show" class="simple-dialog">
      <div class="simple-title">{{ title }}</div>
      <div class="simple-desc">{{ message }}</div>
      <div>
        <simples-button
          text
          type="primary"
          @click="handleClose('close')"
          v-if="confirmButton"
          >取消</simples-button
        >
        <simples-button
          text
          type="primary"
          @click="handleClose('sure')"
          v-if="cancelButton"
          >确定</simples-button
        >
      </div>
    </div>
  </div>
</template>
 
<script>
import SimplesButton from "../button/Button.vue";
import createSnackbar from "../snackbar/Snackbar";
import { ref } from "vue";
export default {
  name:'SimplesDialog',
  props: {
    title: String,
    message: String,
    show: Boolean,
    confirmButton: Boolean,
    cancelButton: Boolean,
  },
  setup(props, context) {
    let query = ref("");
    const emits = context["emit"];
    let handleClose = (state) => {
      state == "close"
        ? createSnackbar.warning("close")
        : createSnackbar.success("sure");
      emits("update:show", false);
      query.value = "none";
    };
    return {query,handleClose}
  },
};
</script>
<style lang="css">
.simple-dialog {
  width: 40%;
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%);
  background-color: #fff;
}

.simple-dialog div:nth-child(3) {
  align-self: flex-end;
  padding-right: 10px;
}
.box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index:2000;
}
.simple-title {
  font-size: 18px;
  font-weight: 400;
}
.simple-desc {
  font-size: 14px;
  color: #888;
}
</style>
