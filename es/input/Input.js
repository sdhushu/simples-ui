import { ref } from "vue";
import { createCommentVNode as _createCommentVNode, vModelText as _vModelText, normalizeClass as _normalizeClass, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  style: {
    "position": "relative"
  }
};
var _hoisted_2 = ["disabled", "maxlength"];
var _hoisted_3 = ["disabled"];
var _hoisted_4 = {
  key: 2,
  class: "simple-count"
};

_popScopeId();

export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [_createCommentVNode(" <div v-if=\"show\" :class=\"[show ? 'simple-input--text' : '']\">\r\n      <label>{{placeholder}}</label>\r\n    </div> "), !_ctx.textarea ? _withDirectives((_openBlock(), _createElementBlock("input", {
    key: 0,
    class: _normalizeClass(["simple-input", [_ctx.show ? 'simple-input--focus' : '', _ctx.line ? 'simple-input--line' : '', _ctx.disabled ? 'simple-input--disabled' : '']]),
    type: "text",
    disabled: _ctx.disabled || _ctx.readonly,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
    maxlength: _ctx.maxlength,
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleinput && _ctx.handleinput(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args))
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_2)), [[_vModelText, _ctx.value]]) : _createCommentVNode("v-if", true), _ctx.textarea ? _withDirectives((_openBlock(), _createElementBlock("textarea", {
    key: 1,
    name: "",
    id: "",
    class: _normalizeClass(["simple-input", [_ctx.textarea ? 'simple-textarea' : '', _ctx.show ? 'simple-input--focus' : '', _ctx.disabled ? 'simple-input--disabled' : '']]),
    rows: "8",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.value = $event),
    disabled: _ctx.disabled || _ctx.readonly,
    onInput: _cache[5] || (_cache[5] = (...args) => _ctx.handleinput && _ctx.handleinput(...args)),
    onFocus: _cache[6] || (_cache[6] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onBlur: _cache[7] || (_cache[7] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args))
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_3)), [[_vModelText, _ctx.value]]) : _createCommentVNode("v-if", true), _createElementVNode("label", {
    class: _normalizeClass(["simple-input--label", [_ctx.show ? 'simple-input--change' : '', _ctx.value ? 'simple-input--change' : '', _ctx.disabled ? 'simple-input--disabled--text' : '']])
  }, _toDisplayString(_ctx.placeholder), 3
  /* TEXT, CLASS */
  ), _ctx.maxlength ? (_openBlock(), _createElementBlock("div", _hoisted_4, [_createElementVNode("span", null, _toDisplayString(_ctx.value.length) + "/" + _toDisplayString(_ctx.maxlength), 1
  /* TEXT */
  )])) : _createCommentVNode("v-if", true)]);
}
export default {
  render,
  name: 'SimplesInput',
  props: {
    placeholder: String,
    modelValue: String,
    line: Boolean,
    textarea: Boolean,
    maxlength: Number,
    disabled: Boolean,
    readonly: Boolean
  },

  setup(props, context) {
    var emits = context['emit'];
    var value = ref("");
    var show = ref(false);

    var handleinput = () => {
      emits("update:modelValue", value.value);
    };

    var handleFocus = () => {
      console.log("点击了");
      show.value = true;
    };

    var handleBlur = () => {
      show.value = false;
    };

    return {
      value,
      show,
      handleinput,
      handleFocus,
      handleBlur
    };
  }

};