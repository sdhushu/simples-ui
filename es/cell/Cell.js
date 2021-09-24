import { renderSlot as _renderSlot, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1,
  class: "simple-desc"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass(["simple-cell", [_ctx.border ? 'simple-border' : '']])
  }, [_renderSlot(_ctx.$slots, "left"), _createTextVNode(_toDisplayString(_ctx.title) + " ", 1
  /* TEXT */
  ), !_ctx.title ? (_openBlock(), _createElementBlock("span", _hoisted_1, [_renderSlot(_ctx.$slots, "default")])) : _createCommentVNode("v-if", true), _ctx.desc ? (_openBlock(), _createElementBlock("div", _hoisted_2, _toDisplayString(_ctx.desc), 1
  /* TEXT */
  )) : _createCommentVNode("v-if", true), _renderSlot(_ctx.$slots, "right")], 2
  /* CLASS */
  );
}
export default {
  render,
  name: 'SimplesCell',
  props: {
    title: String,
    desc: String,
    border: Boolean
  }
};