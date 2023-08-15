import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  }
};
const _sfc_main = defineComponent({
  name: "SFCButton",
  props
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
