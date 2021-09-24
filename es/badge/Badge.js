import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  style: {
    "display": "inline-block",
    "position": "relative"
  }
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [!_ctx.hidden ? (_openBlock(), _createElementBlock("span", {
    key: 0,
    class: _normalizeClass(["simple-badge", [_ctx.type ? "simple-badge--" + _ctx.type : '', _ctx.dot ? 'simple-badge--dot' : '', _ctx.value ? 'simple-badge--value' : '', _ctx.position ? "simple-position--" + _ctx.position : '']]),
    style: _normalizeStyle({
      backgroundColor: _ctx.color
    })
  }, _toDisplayString(_ctx.result || _ctx.value || 0), 7
  /* TEXT, CLASS, STYLE */
  )) : _createCommentVNode("v-if", true), _renderSlot(_ctx.$slots, "default")]);
}
export default {
  render,
  name: "SimplesBadge",
  props: {
    type: String,
    dot: Boolean,
    value: String,
    maxValue: String,
    position: String,
    color: String,
    hidden: Boolean
  },

  setup(props) {
    var result = props.value && props.maxValue ? props.value < props.maxValue ? props.value : "99+" : "";
    return {
      result
    };
  }

};