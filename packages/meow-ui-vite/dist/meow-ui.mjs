import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, createCommentVNode, renderSlot, computed, ref, withDirectives, vModelDynamic } from "vue";
const __uno = "";
const type2Color = {
  primary: "blue",
  warning: "yellow",
  danger: "red",
  success: "green",
  default: "gray"
};
const props$1 = {
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
const _sfc_main$1 = defineComponent({
  name: "MButton",
  props: props$1,
  setup() {
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
const index_vue_vue_type_style_index_0_scoped_e6a8efeb_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "m-button-wrapper" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2)
  ]);
}
const MButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e6a8efeb"]]);
const props = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "medium"
  },
  placeholder: {
    type: String,
    default: "\u8BF7\u8F93\u5165"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  },
  password: {
    type: Boolean,
    default: false
  }
};
const _sfc_main = defineComponent({
  name: "MInput",
  props,
  emits: ["update:input", "iconClick"],
  setup(props2, { emit }) {
    const sizeMap = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
        r: "8"
      },
      medium: {
        x: "3",
        y: "2",
        text: "base",
        r: "8"
      },
      large: {
        x: "5",
        y: "3",
        text: "lg",
        r: "9"
      }
    };
    const canClear = computed(
      () => input.value != "" && props2.icon === "" && props2.clearable
    );
    const clear = () => {
      if (props2.clearable) {
        input.value = "";
      }
    };
    const iconClick = () => {
      emit("iconClick");
    };
    const input = ref("");
    const onInput = () => {
      emit("update:input", input.value);
    };
    return {
      canClear,
      clear,
      input,
      iconClick,
      sizeMap,
      onInput
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_59d2c179_lang = "";
const _hoisted_1 = { class: "m-input-wrapper" };
const _hoisted_2 = { class: "text-input" };
const _hoisted_3 = ["disabled", "type", "placeholder"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      withDirectives(createElementVNode("input", {
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.input = $event),
        class: normalizeClass([
          `py-${_ctx.sizeMap[_ctx.size].y}`,
          `px-${_ctx.sizeMap[_ctx.size].x}`,
          `text-${_ctx.sizeMap[_ctx.size].text}`,
          "rounded-lg",
          `${_ctx.disabled ? "border-gray-200" : "border-blue-200"}`,
          `${_ctx.disabled ? "cursor-not-allowed" : "cursor-pointer"}`,
          `${_ctx.clearable || _ctx.icon ? "p-r-" + _ctx.sizeMap[_ctx.size].r : "p-r-3"}`,
          { "bg-gray-100": _ctx.disabled }
        ]),
        disabled: _ctx.disabled,
        type: _ctx.password ? "password" : "text",
        placeholder: _ctx.placeholder
      }, null, 42, _hoisted_3), [
        [vModelDynamic, _ctx.input]
      ]),
      _ctx.canClear ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass([
          "icon-in",
          "i-ic-outline-cancel",
          "text-gray-400",
          "hover:bg-gray-500",
          "p-0.5",
          "absolute",
          `text-${_ctx.sizeMap[_ctx.size].text}`
        ]),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.clear && _ctx.clear(...args))
      }, null, 2)) : _ctx.icon ? (openBlock(), createElementBlock("i", {
        key: 1,
        class: normalizeClass([
          "icon-in",
          _ctx.icon,
          "p-0.5",
          "absolute",
          "text-gray-400",
          `text-${_ctx.sizeMap[_ctx.size].text}`,
          "hover:bg-gray-500"
        ]),
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.iconClick && _ctx.iconClick(...args))
      }, null, 2)) : createCommentVNode("", true)
    ])
  ]);
}
const MInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59d2c179"]]);
const entry = {
  install(app) {
    app.component(MButton.name, MButton);
    app.component(MInput.name, MInput);
  }
};
export {
  MButton,
  MInput,
  entry as default
};
//# sourceMappingURL=meow-ui.mjs.map
