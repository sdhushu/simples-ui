import { onMounted, ref } from "vue";
import { renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  class: "simples-tab-item",
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
  name: "SimplesTabItem",
  props: {
    name: String
  },

  setup(props, context) {
    var ItemRef = ref(null);
    onMounted(() => {
      ItemRef.value.ariaLabel = props.name;
    });
    return {
      ItemRef
    };
  }

};