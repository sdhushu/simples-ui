import "vue";
import { renderSlot as _renderSlot, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("span", {
    class: _normalizeClass(["simple-chip", [_ctx.type ? "simple-chip--" + _ctx.type + " text-color" : '', _ctx.type && _ctx.plain ? "simple-chip--" + _ctx.type + "--color" : '', _ctx.square ? 'simple-chip-square' : '', _ctx.size ? "simple-chip--" + _ctx.size : '', _ctx.block ? 'simple-chip--block' : '', _ctx.color && _ctx.plain || _ctx.plain && _ctx.textColor ? 'simple-plain' : '']]),
    style: _normalizeStyle({
      backgroundColor: _ctx.colors,
      color: _ctx.textColor
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [_renderSlot(_ctx.$slots, "left"), _createElementVNode("span", null, [_renderSlot(_ctx.$slots, "default")]), _renderSlot(_ctx.$slots, "right")], 6
  /* CLASS, STYLE */
  );
}
export default {
  render,
  name: "SimplesChip",
  props: {
    type: String,
    plain: Boolean,
    square: Boolean,
    size: String,
    block: Boolean,
    color: String,
    textColor: String
  },

  setup(props, context) {
    var colors = props.plain ? "" : props.color;
    var emits = context["emit"];

    var handleClick = () => {
      emits("close");
    };

    return {
      colors,
      handleClick
    };
  }

};