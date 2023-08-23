import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, createCommentVNode, renderSlot, computed, ref, withDirectives, vModelDynamic, toDisplayString, resolveComponent, Fragment, renderList, createTextVNode, createBlock } from "vue";
const __uno = "";
const type2Color = {
  primary: "blue",
  warning: "yellow",
  danger: "red",
  success: "green",
  default: "gray"
};
const props$2 = {
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
const _sfc_main$3 = defineComponent({
  name: "MButton",
  props: props$2,
  setup() {
    const sizeMap2 = {
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
      sizeMap: sizeMap2,
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
const _hoisted_1$3 = { class: "m-button-wrapper" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
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
const MButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-e6a8efeb"]]);
const props$1 = {
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
const _sfc_main$2 = defineComponent({
  name: "MInput",
  props: props$1,
  emits: ["update:input", "iconClick"],
  setup(props2, { emit }) {
    const sizeMap2 = {
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
      sizeMap: sizeMap2,
      onInput
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_59d2c179_lang = "";
const _hoisted_1$2 = { class: "m-input-wrapper" };
const _hoisted_2$2 = { class: "text-input" };
const _hoisted_3$2 = ["disabled", "type", "placeholder"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$2, [
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
      }, null, 42, _hoisted_3$2), [
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
const MInput = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-59d2c179"]]);
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
const props = {
  activeColor: {
    type: String,
    default: "blue"
  },
  inactiveColor: {
    type: String,
    default: "gray"
  },
  activeText: {
    type: String
  },
  inactiveText: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  value: {
    type: Boolean,
    default: false
  }
};
const _sfc_main$1 = defineComponent({
  name: "MSwitch",
  props,
  emits: ["update:input"],
  setup(props2, { emit }) {
    const changeCheck = (e) => {
      emit("update:input", e.checked);
    };
    return {
      sizeMap,
      changeCheck
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_04544dfe_lang = "";
const _hoisted_1$1 = { class: "m-switch-wrapper" };
const _hoisted_2$1 = {
  key: 0,
  class: "m-r-1"
};
const _hoisted_3$1 = ["disabled"];
const _hoisted_4 = {
  key: 1,
  class: "m-l-1"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.inactiveText ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.inactiveText), 1)) : createCommentVNode("", true),
    createElementVNode("input", {
      class: normalizeClass(["switch-btn"]),
      type: "checkbox",
      disabled: _ctx.disabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.changeCheck && _ctx.changeCheck(...args))
    }, null, 40, _hoisted_3$1),
    _ctx.activeText ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.activeText), 1)) : createCommentVNode("", true)
  ]);
}
const MSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-04544dfe"]]);
const _sfc_main = defineComponent({
  name: "MTree",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    showChildren: {
      type: Boolean,
      default: false
    },
    selectedList: {
      type: Array,
      default: () => []
    }
  },
  setup(props2, { emit }) {
    const toggleDisplay = (item) => {
      item.show = !item.show;
    };
    const selectedItem = (item) => {
      const data = props2.selectedList.slice().concat(item.name);
      emit("selectedItem", data);
    };
    return { toggleDisplay, selectedItem };
  }
});
const index_vue_vue_type_style_index_0_scoped_0d0527b8_lang = "";
const _hoisted_1 = { class: "m-tree" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MTree = resolveComponent("MTree");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
      var _a;
      return openBlock(), createElementBlock("div", { key: index }, [
        createElementVNode("div", {
          class: "root",
          onClick: ($event) => _ctx.selectedItem(item)
        }, [
          ((_a = item.children) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "arrow",
            onClick: ($event) => _ctx.toggleDisplay(item)
          }, [
            createElementVNode("i", {
              class: normalizeClass([
                "icon",
                item.show ? "i-ic-arrow-drop-down" : "i-ic-arrow-drop-up"
              ])
            }, null, 2)
          ], 8, _hoisted_3)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(item.name), 1)
        ], 8, _hoisted_2),
        item.show ? (openBlock(), createBlock(_component_MTree, {
          key: 0,
          list: item.children,
          selectedList: _ctx.selectedList.slice().concat(item.name)
        }, null, 8, ["list", "selectedList"])) : createCommentVNode("", true)
      ]);
    }), 128))
  ]);
}
const MTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d0527b8"]]);
const entry = {
  install(app) {
    app.component(MButton.name, MButton);
    app.component(MInput.name, MInput);
    app.component(MSwitch.name, MSwitch);
    app.component(MTree.name, MTree);
  }
};
export {
  MButton,
  MInput,
  MSwitch,
  MTree,
  entry as default
};
//# sourceMappingURL=meow-ui.mjs.map
