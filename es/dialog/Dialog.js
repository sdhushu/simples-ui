import SimplesButton from "../button/Button.js"
import createSnackbar from "../snackbar/Snackbar";
import { ref } from "vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createElementBlock as _createElementBlock, withModifiers as _withModifiers, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  key: 0,
  class: "simple-dialog"
};
var _hoisted_2 = {
  class: "simple-title"
};
var _hoisted_3 = {
  class: "simple-desc"
};

var _hoisted_4 = /*#__PURE__*/_createTextVNode("取消");

var _hoisted_5 = /*#__PURE__*/_createTextVNode("确定");

_popScopeId();

export function render(_ctx, _cache) {
  var _component_simples_button = _resolveComponent("simples-button");

  return _openBlock(), _createElementBlock("div", {
    class: _normalizeClass(_ctx.show ? 'box' : ''),
    style: _normalizeStyle({
      display: _ctx.query
    }),
    onClick: _cache[2] || (_cache[2] = _withModifiers($event => _ctx.handleClose(), ["self"]))
  }, [_ctx.show ? (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, _toDisplayString(_ctx.title), 1
  /* TEXT */
  ), _createElementVNode("div", _hoisted_3, _toDisplayString(_ctx.message), 1
  /* TEXT */
  ), _createElementVNode("div", null, [_ctx.confirmButton ? (_openBlock(), _createBlock(_component_simples_button, {
    key: 0,
    text: "",
    type: "primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.handleClose('close'))
  }, {
    default: _withCtx(() => [_hoisted_4]),
    _: 1
    /* STABLE */

  })) : _createCommentVNode("v-if", true), _ctx.cancelButton ? (_openBlock(), _createBlock(_component_simples_button, {
    key: 1,
    text: "",
    type: "primary",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.handleClose('sure'))
  }, {
    default: _withCtx(() => [_hoisted_5]),
    _: 1
    /* STABLE */

  })) : _createCommentVNode("v-if", true)])])) : _createCommentVNode("v-if", true)], 6
  /* CLASS, STYLE */
  );
}
export default {
  render,
  name: 'SimplesDialog',
  props: {
    title: String,
    message: String,
    show: Boolean,
    confirmButton: Boolean,
    cancelButton: Boolean
  },

  setup(props, context) {
    var query = ref("");
    var emits = context["emit"];

    var handleClose = state => {
      state == "close" ? createSnackbar.warning("close") : createSnackbar.success("sure");
      emits("update:show", false);
      query.value = "none";
    };

    return {
      query,
      handleClose
    };
  }

};