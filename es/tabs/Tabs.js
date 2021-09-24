import { ref, onMounted } from "vue";
import { renderSlot as _renderSlot, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
export function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock(_Fragment, null, [_createElementVNode("div", {
    class: "simple-tabs",
    ref: "divEle",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    style: _normalizeStyle({
      backgroundColor: _ctx.color
    })
  }, [_renderSlot(_ctx.$slots, "default")], 4
  /* STYLE */
  ), _createElementVNode("div", {
    class: "simple-line",
    style: _normalizeStyle({
      width: "" + _ctx.width,
      transform: "translateX(" + _ctx.translateX + ")"
    })
  }, null, 4
  /* STYLE */
  )], 64
  /* STABLE_FRAGMENT */
  );
}
export default {
  render,
  name: 'SimplesTabs',
  props: {
    active: String,
    color: String,
    activeColor: String,
    inactiveColor: String
  },

  setup(props, context) {
    var width = ref(0);
    var divEle = ref(null);
    var emit = context["emit"];
    var translateX = ref(0);
    onMounted(() => {
      var _loop = function (j) {
        props.active ? (() => {
          props.active == divEle.value.children[j].ariaLabel ? handleClick(divEle.value.children[j]) : "";
        })() : "";
      };

      for (var j = 0; j < divEle.value.children.length; j++) {
        _loop(j);
      }
    });

    var handleClick = event => {
      for (var j = 0; j < divEle.value.children.length; j++) {
        divEle.value.children[j].style = "color:" + props.inactiveColor || "color:#000";
      }

      event.path ? (() => {
        var _loop2 = function (i) {
          event.path[i].className == "simple-wrap" ? (() => {
            emit("update:active", event.path[i].ariaLabel);
            event.path[i].style = "color:" + props.activeColor || "color:#409eff";
            translateX.value = event.path[i].offsetLeft + "px";
            width.value = event.path[i].clientWidth + "px";
          })() : "";
        };

        for (var i = 0; i < event.path.length; i++) {
          _loop2(i);
        }
      })() : (() => {
        event.style = "color:" + props.activeColor || "color:#409eff";
        translateX.value = event.offsetLeft + "px";
        width.value = event.clientWidth + "px";
      })();
    };

    return {
      handleClick,
      width,
      translateX,
      divEle
    };
  }

};