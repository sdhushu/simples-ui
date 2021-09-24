<template>
  <div style="position: relative">
    <!-- <div v-if="show" :class="[show ? 'simple-input--text' : '']">
      <label>{{placeholder}}</label>
    </div> -->
    <input
      v-if="!textarea"
      class="simple-input"
      :class="[
        show ? 'simple-input--focus' : '',
        line ? 'simple-input--line' : '',
        disabled ? 'simple-input--disabled' : '',
      ]"
      type="text"
      :disabled="disabled || readonly"
      v-model="value"
      :maxlength="maxlength"
      @input="handleinput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <textarea
      v-if="textarea"
      name=""
      id=""
      class="simple-input"
      :class="[
        textarea ? 'simple-textarea' : '',
        show ? 'simple-input--focus' : '',
        disabled ? 'simple-input--disabled' : '',
      ]"
      rows="8"
      v-model="value"
      :disabled="disabled || readonly"
      @input="handleinput"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
    <label
      class="simple-input--label"
      :class="[
        show ? 'simple-input--change' : '',
        value ? 'simple-input--change' : '',
        disabled ? 'simple-input--disabled--text' : '',
      ]"
      >{{ placeholder }}</label
    >
    <div v-if="maxlength" class="simple-count">
      <span>{{ value.length }}/{{ maxlength }}</span>
    </div>
  </div>
</template>
 
<script>
import { ref } from "vue";
export default {
  name:'SimplesInput',
  props: {
    placeholder: String,
    modelValue: String,
    line: Boolean,
    textarea: Boolean,
    maxlength: Number,
    disabled: Boolean,
    readonly: Boolean,
  },
  setup(props, context) {
    const emits = context['emit'];
    let value = ref("");
    let show = ref(false);
    let handleinput = () => {
      emits("update:modelValue", value.value);
    };
    let handleFocus = () => {
      console.log("点击了");
      show.value = true;
    };
    let handleBlur = () => {
      show.value = false;
    };
    return {value,show,handleinput,handleFocus,handleBlur}
  },
};
</script>
<style lang="css">
.simple-input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
}
.simple-input--focus {
  border: none;
  outline: none;
  border-bottom: 1px solid skyblue;
}
.simple-input--label {
  position: absolute;
  top: 30%;
  display: block;
}
.simple-input--change {
  top: -8%;
  color: skyblue;
  transform-origin: left;
  transition-property: top, transform;
  transition-duration: 0.3s;
  font-size: 8px;
}
.simple-input--line {
  border: none;
}
.simple-textarea {
  resize: none;
  height: auto;
}
.simple-count {
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  color: rgb(194, 197, 201);
}
input:disabled {
  background-color: #fff;
}
textarea:disabled {
  background-color: #fff;
}
.simple-input--disabled--text {
  color: rgb(194, 197, 201);
}
.simple-input--disabled {
  border-bottom: 1px solid rgb(194, 197, 201);
}
</style>
