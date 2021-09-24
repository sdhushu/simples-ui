<template>
  <div class="simples-tabs-items" ref="ItemRef">
    <slot></slot>
  </div>
</template>
 
<script>
import { onMounted, ref, watch } from "vue";
export default {
  name: "SimplesTabsItems",
  props: { active: String, list: Object },
  setup(props, context) {
    let ItemRef = ref(null);
    let FindProps = () => {};
    props.active ? (() => {})() : "";
    onMounted(() => {
      watch(
        () => props.active,
        (NewValue, OldValue) => {
          console.log(NewValue, props.active);
          NewValue
            ? (() => {
                let num = -1;
                props.list.forEach((element) => {
                  num++;
                  element == props.active
                    ? (() => {
                        console.log(ItemRef);
                        let width = ItemRef.value.offsetWidth;
                        console.log(-width * num);
                        for (let i = 0; i < props.list.length; i++) {
                          ItemRef.value.children[
                            i
                          ].style = `transform: translateX(${-width * num}px)`;
                        }
                      })()
                    : "";
                });
              })()
            : "";
        },
        { immediate: true }
      );
    });

    return { ItemRef };
  },
};
</script>
<style lang="css">
.simples-tabs-items {
  width: 100%;
  height: auto;
  background: cornflowerblue;
  display: flex;
  transition: width 1s, height 1s, transform 1s;
  overflow: auto;
}
.simples-tabs-items::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
