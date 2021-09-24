import { ref, watch, useSlots } from "vue";
import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  class: "simple-snackbar--snackbar"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", {
    class: _normalizeClass(["simple-snackbar", [_ctx.slots ? 'simple-snackbar--height' : '', _ctx.type ? "simple-snackbar--" + _ctx.type : '']]),
    style: _normalizeStyle({
      display: _ctx.query
    })
  }, [_createTextVNode(_toDisplayString(_ctx.message), 1
  /* TEXT */
  ), _renderSlot(_ctx.$slots, "default"), _createElementVNode("div", _hoisted_1, [_renderSlot(_ctx.$slots, "action")])], 6
  /* CLASS, STYLE */
  )]);
}
export default {
  render,
  name: 'SimplesSnackbar',
  props: {
    show: Boolean,
    duration: Number,
    message: String,
    type: String
  },

  setup(props, context) {
    var emits = context["emit"];
    var query = ref("none");

    var changes = () => {
      query.value = "block";
      setTimeout(() => {
        query.value = "none";
        emits("update:show", false);
      }, props.duration || 3000);
    };

    props.show ? changes() : query.value = "none";
    var slots = useSlots().action ? true : false;
    watch(props, newProps => {
      newProps.show ? changes() : query.value = "none";
    });
    return {
      query,
      slots,
      changes
    };
  }

};