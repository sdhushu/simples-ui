import { ref } from "vue";
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

_pushScopeId("");

var _hoisted_1 = {
  key: 0,
  class: "simple-imgpreview-text"
};
var _hoisted_2 = ["src"];

_popScopeId();

export function render(_ctx, _cache) {
  return _ctx.show || _ctx.currentShow ? (_openBlock(), _createElementBlock("div", {
    key: 0,
    class: "simple-imgpreview",
    onDblclick: _cache[0] || (_cache[0] = (...args) => _ctx.handledbClick && _ctx.handledbClick(...args)),
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [_createElementVNode("div", {
    class: _normalizeClass(["simple-img-wrap", [_ctx.double ? 'simple-double' : '']])
  }, [_ctx.current ? (_openBlock(), _createElementBlock("div", _hoisted_1, _toDisplayString(_ctx.num) + "/" + _toDisplayString(_ctx.images.length), 1
  /* TEXT */
  )) : _createCommentVNode("v-if", true), _ctx.images ? (_openBlock(), _createElementBlock("img", {
    key: 1,
    src: _ctx.images["" + (_ctx.num - 1) || 0],
    alt: "",
    class: "simple-img"
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : _createCommentVNode("v-if", true)], 2
  /* CLASS */
  )], 32
  /* HYDRATE_EVENTS */
  )) : _createCommentVNode("v-if", true);
}
export default {
  render,
  name: 'SimplesImagePreview',
  props: {
    show: Boolean,
    currentShow: Boolean,
    images: Object,
    current: String
  },

  setup(props, context) {
    var time;
    var double = ref(false);
    var images = props.images ? Array.from(props.images) : "";
    var emits = context["emit"];
    var num = props.current ? images.findIndex(value => value == props.current) + 1 : 1;

    var handleClick = () => {
      clearTimeout(time);
      time = setTimeout(() => {
        props.show && !props.currentShow ? emits("update:show", false) : "";
        !props.show && props.currentShow ? emits("update:currentShow", false) : "";
      }, 300);
    };

    var handledbClick = () => {
      clearTimeout(time);
      double.value = !double.value;
    };

    return {
      images,
      num,
      double,
      handleClick,
      handledbClick
    };
  }

};