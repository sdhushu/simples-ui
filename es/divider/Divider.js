import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue";
export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass([_ctx.vertical ? 'simple-hr--vertical' : ''])
  }, [!_ctx.vertical ? (_openBlock(), _createElementBlock("hr", {
    key: 0,
    class: _normalizeClass(["simple-hr", [_ctx.dashed ? 'simple-hr--dashed' : '']])
  }, null, 2
  /* CLASS */
  )) : _createCommentVNode("v-if", true)], 2
  /* CLASS */
  );
}
export default {
  render,
  name: 'SimpleDivider',
  props: {
    dashed: Boolean,
    vertical: Boolean
  }
};