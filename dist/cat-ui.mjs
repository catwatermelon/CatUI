import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "medium"
  }
};
const _sfc_main = defineComponent({
  name: "SFCButton",
  props,
  setup() {
    const sizeMap = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return {
      sizeMap
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
      class: normalizeClass([
        `py-${_ctx.sizeMap[_ctx.size].y}`,
        `px-${_ctx.sizeMap[_ctx.size].x}`,
        `text-${_ctx.sizeMap[_ctx.size].text}`,
        "py-2",
        "px-4",
        "font-semibold",
        "rounded-lg",
        "shadow-md",
        "text-white",
        `bg-${_ctx.$props.color}-500`,
        { hover: `bg-${_ctx.$props.color}-700` },
        "border-none",
        "cursor-pointer",
        "m-1"
      ])
    }, [
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
