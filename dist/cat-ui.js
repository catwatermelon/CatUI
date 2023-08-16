import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, createCommentVNode, renderSlot } from "vue";
const __uno = "";
const type2Color = {
  primary: "blue",
  warning: "yellow",
  danger: "red",
  success: "green",
  default: "gray"
};
const props = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "medium"
  },
  ghost: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const _sfc_main = defineComponent({
  name: "SFCButton",
  props,
  setup(props2) {
    const sizeMap = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "2",
        text: "base"
      },
      large: {
        x: "5",
        y: "3",
        text: "lg"
      }
    };
    return {
      sizeMap,
      type2Color
    };
  }
});
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("button", {
      type: "button",
      class: normalizeClass([
        `text-${_ctx.ghost ? _ctx.type2Color[_ctx.type] + "-600" : "white"}`,
        `hover:text-${_ctx.ghost ? "white" : _ctx.type2Color[_ctx.type] + "-400"}`,
        `bg-${_ctx.type2Color[_ctx.type]}-${_ctx.ghost ? 200 : 400}`,
        `hover:bg-${_ctx.type2Color[_ctx.type]}-${_ctx.ghost ? 500 : 500}`,
        `border-${_ctx.type2Color[_ctx.type]}-${_ctx.ghost ? 500 : 400}`,
        `hover:border-${_ctx.type2Color[_ctx.type]}-500`,
        `py-${_ctx.sizeMap[_ctx.size].y}`,
        `px-${_ctx.sizeMap[_ctx.size].x}`,
        `text-${_ctx.sizeMap[_ctx.size].text}`,
        `${_ctx.round ? "rounded-full" : "rounded-lg"}`,
        "cursor-pointer",
        "transition duration-300 ease-in-out transform hover:scale-105",
        "mx-1"
      ])
    }, [
      _ctx.icon ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass([`i-ic-baseline-${_ctx.icon}`, "p-3"])
      }, null, 2)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ]);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  SFCButton,
  entry as default
};
