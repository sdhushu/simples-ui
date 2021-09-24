import { onMounted, ref, watch } from "vue";
import { renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  class: "simples-tabs-items",
  ref: "ItemRef"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [_renderSlot(_ctx.$slots, "default")], 512
  /* NEED_PATCH */
  );
}
export default {
  render,
  name: "SimplesTabsItems",
  props: {
    active: String,
    list: Object
  },

  setup(props, context) {
    var ItemRef = ref(null);

    var FindProps = () => {};

    props.active ? (() => {})() : "";
    onMounted(() => {
      watch(() => props.active, (NewValue, OldValue) => {
        console.log(NewValue, props.active);
        NewValue ? (() => {
          var num = -1;
          props.list.forEach(element => {
            num++;
            element == props.active ? (() => {
              console.log(ItemRef);
              var width = ItemRef.value.offsetWidth;
              console.log(-width * num);

              for (var i = 0; i < props.list.length; i++) {
                ItemRef.value.children[i].style = "transform: translateX(" + -width * num + "px)";
              }
            })() : "";
          });
        })() : "";
      }, {
        immediate: true
      });
    });
    return {
      ItemRef
    };
  }

};