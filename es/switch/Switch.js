// import simpleloading from "./Loading.js"
import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  class: "simple-switch"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", {
    class: _normalizeClass(["simple-switch--warp", [_ctx.modelValue ? 'simple-switch--warp-r' : '']]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    style: _normalizeStyle({
      width: _ctx.width + 'px',
      height: _ctx.height + 'px'
    })
  }, [_createElementVNode("div", {
    class: _normalizeClass(["simple-switch--item", [_ctx.modelValue ? 'simple-switch--item-r' : '']]),
    style: _normalizeStyle({
      width: _ctx.cicle + 'px',
      height: _ctx.cicle + 'px'
    })
  }, null, 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )]);
}
export default {
  render,
  name: "SimplesSwitch",
  // components: [simpleloading],
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    color: String,
    closeColor: String,
    width: String,
    height: String,
    cicle: String,
    loading: Boolean
  },

  setup(props, context) {
    var emits = context["emit"];

    var handleClick = () => {
      if (!props.disabled) {
        emits("update:modelValue", !props.modelValue);
      }
    };

    return {
      handleClick
    };
  }

};