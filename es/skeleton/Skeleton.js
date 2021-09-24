import { ref } from "vue";
import { openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, normalizeClass as _normalizeClass, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  key: 0,
  class: "simple-skeleton--logo"
};
var _hoisted_2 = {
  class: "logo"
};
var _hoisted_3 = {
  key: 0,
  class: "simple-skeleton--animation"
};
var _hoisted_4 = {
  key: 0,
  class: "simple-skeleton--item simple-skeleton--title"
};
var _hoisted_5 = {
  key: 0,
  class: "simple-skeleton--animation"
};
var _hoisted_6 = {
  key: 0,
  class: "simple-skeleton--animation"
};
var _hoisted_7 = {
  key: 0,
  class: "simple-skeleton--animation"
};
var _hoisted_8 = {
  key: 0,
  class: "simple-skeleton--animation"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass(["simple-skeleton", [_ctx.avatar ? 'simple-skeleton--avatar' : '']])
  }, [_ctx.avatar ? (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_ctx.loading ? (_openBlock(), _createElementBlock("div", _hoisted_3)) : _createCommentVNode("v-if", true)])])) : _createCommentVNode("v-if", true), _createElementVNode("div", {
    class: _normalizeClass([_ctx.avatar ? 'simple-item--wrap' : ''])
  }, [_ctx.title ? (_openBlock(), _createElementBlock("div", _hoisted_4, [_ctx.loading ? (_openBlock(), _createElementBlock("div", _hoisted_5)) : _createCommentVNode("v-if", true)])) : _createCommentVNode("v-if", true), !_ctx.rows || _ctx.rows && _ctx.rows >= 1 ? (_openBlock(), _createElementBlock("div", {
    key: 1,
    class: "simple-skeleton--item",
    style: _normalizeStyle({
      width: _ctx.rowsWidth[0]
    })
  }, [_ctx.loading ? (_openBlock(), _createElementBlock("div", _hoisted_6)) : _createCommentVNode("v-if", true)], 4
  /* STYLE */
  )) : _createCommentVNode("v-if", true), !_ctx.rows || _ctx.rows && _ctx.rows >= 2 ? (_openBlock(), _createElementBlock("div", {
    key: 2,
    class: "simple-skeleton--item",
    style: _normalizeStyle({
      width: _ctx.rowsWidth[1]
    })
  }, [_ctx.loading ? (_openBlock(), _createElementBlock("div", _hoisted_7)) : _createCommentVNode("v-if", true)], 4
  /* STYLE */
  )) : _createCommentVNode("v-if", true), !_ctx.rows || _ctx.rows && _ctx.rows >= 3 ? (_openBlock(), _createElementBlock("div", {
    key: 3,
    class: "simple-skeleton--item",
    style: _normalizeStyle({
      width: _ctx.rowsWidth[2]
    })
  }, [_ctx.loading ? (_openBlock(), _createElementBlock("div", _hoisted_8)) : _createCommentVNode("v-if", true)], 4
  /* STYLE */
  )) : _createCommentVNode("v-if", true)], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
export default {
  render,
  name: 'SimplesSkeleton',
  props: {
    loading: Boolean,
    title: Boolean,
    rows: Number,
    rowsWidth: Object,
    avatar: Boolean,
    card: Boolean
  },

  setup(props, content) {
    var rowsWidth = props.rowsWidth ? Array.from(props.rowsWidth) : "";
    return {
      rowsWidth
    };
  }

};