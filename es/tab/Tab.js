import { ref } from "vue";
import { renderSlot as _renderSlot, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = ["ariaLabel"];
var _hoisted_2 = {
  class: "simple-tab"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass(["simple-wrap", [_ctx.disabled ? 'simple-disabled' : '']]),
    ariaLabel: _ctx.name
  }, [_createElementVNode("div", _hoisted_2, [_renderSlot(_ctx.$slots, "default")])], 10
  /* CLASS, PROPS */
  , _hoisted_1);
}
export default {
  render,
  name: "SimplesTab",
  props: {
    name: String,
    disabled: Boolean
  },

  setup(props, context) {
    var line = ref(0);
    return {
      line
    };
  }

};