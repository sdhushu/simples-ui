import { normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = ["src", "alt"];

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass([[_ctx.block ? 'simple-img-block' : ''], "simple-div"])
  }, [_createElementVNode("img", {
    src: _ctx.src,
    alt: _ctx.alt,
    class: "simple-img",
    style: _normalizeStyle({
      width: _ctx.width,
      height: _ctx.height,
      borderRadius: _ctx.round
    })
  }, null, 12
  /* STYLE, PROPS */
  , _hoisted_1)], 2
  /* CLASS */
  );
}
export default {
  render,
  name: 'SimplesImg',
  props: {
    src: String,
    width: String,
    height: String,
    round: String,
    alt: String,
    block: Boolean
  }
};