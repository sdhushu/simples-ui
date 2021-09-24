import { openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, renderSlot as _renderSlot, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  class: "simple-card"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  class: "card-title"
};
var _hoisted_4 = {
  key: 1,
  class: "card-sub"
};
var _hoisted_5 = {
  class: "card-desc"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [_ctx.src ? (_openBlock(), _createElementBlock("img", {
    key: 0,
    class: "card-img",
    src: _ctx.src,
    alt: "图片"
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : _createCommentVNode("v-if", true), _createElementVNode("div", _hoisted_3, _toDisplayString(_ctx.title), 1
  /* TEXT */
  ), _ctx.subtitle ? (_openBlock(), _createElementBlock("div", _hoisted_4, _toDisplayString(_ctx.subtitle), 1
  /* TEXT */
  )) : _createCommentVNode("v-if", true), _createElementVNode("div", _hoisted_5, _toDisplayString(_ctx.description), 1
  /* TEXT */
  ), _renderSlot(_ctx.$slots, "extra")]);
}
export default {
  render,
  name: 'SimplesCard',
  props: {
    title: String,
    description: String,
    subtitle: String,
    src: String
  }
};