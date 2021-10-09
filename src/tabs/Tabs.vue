<template>
  <div
    class="simple-tabs"
    ref="divEle"
    @click="handleClick"
    :style="{ backgroundColor: color }"
  >
    <slot></slot>
  </div>
  <div
    class="simple-line"
    :style="{ width: `${width}`, transform: `translateX(${translateX})` }"
  ></div>
</template>
 
<script>
import { ref, onMounted } from "vue";
export default {
  name:'SimplesTabs',
  props: {
    active: String,
    color: String,
    activeColor: String,
    inactiveColor: String,
  },
  setup(props, context) {
    let width = ref(0);
    let divEle = ref(null);
    let emit = context["emit"];
    let translateX = ref(0);
    onMounted(() => {
      for (let j = 0; j < divEle.value.children.length; j++) {
        props.active
          ? (() => {
              props.active == divEle.value.children[j].ariaLabel
                ? handleClick(divEle.value.children[j])
                : "";
            })()
          : "";
      }
    });
    let handleClick = (event) => {
      for (let j = 0; j < divEle.value.children.length; j++) {
        divEle.value.children[j].style =
          `color:${props.inactiveColor}` || "color:#000";
      }
      event.path
        ? (() => {
          console.log(event.path,333)
            for (let i = 0; i < event.path.length; i++) {
              event.path[i].className == "simple-wrap"
                ? (() => {
                    emit("update:active", event.path[i].ariaLabel);
                    event.path[i].style =
                      `color:${props.activeColor}` || "color:#409eff";
                    translateX.value = event.path[i].offsetLeft + "px";
                    width.value = event.path[i].clientWidth + "px";
                  })()
                : "";
            }
          })()
        : (() => {
            event.style = `color:${props.activeColor}` || "color:#409eff";
            translateX.value = event.offsetLeft + "px";
            width.value = event.clientWidth + "px";
          })();
    };
    return { handleClick, width, translateX, divEle };
  },
};
</script>
<style lang="css">
.simple-tabs {
  width: auto;
  height: 60px;
  /* padding-left: 55px; */
  /* background-color: aqua; */
  display: flex;
  position: relative;
}
.simple-line {
  width: 0;
  height: 3px;
  background-color: #409eff;
  transition: width 1s, height 1s, transform 1s;
}
</style>
