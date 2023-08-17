<template>
  <div class="m-input-wrapper">
    <div class="text-input">
      <input
        @input="onInput"
        v-model="input"
        :class="[
          `py-${sizeMap[size].y}`,
          `px-${sizeMap[size].x}`,
          `text-${sizeMap[size].text}`,
          'rounded-lg',
          `${disabled ? 'border-gray-200' : 'border-blue-200'}`,
          `${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          `${clearable || icon ? 'p-r-' + sizeMap[size].r : 'p-r-3'}`,
          { 'bg-gray-100': disabled },
        ]"
        :disabled="disabled"
        :type="password ? 'password' : 'text'"
        :placeholder="placeholder"
      />
      <i
        v-if="canClear"
        :class="[
          'icon-in',
          'i-ic-outline-cancel',
          'text-gray-400',
          'hover:bg-gray-500',
          'p-0.5',
          'absolute',
        ]"
        @click="clear"
      ></i>
      <i
        v-else-if="icon"
        :class="[
          'icon-in',
          icon,
          'p-0.5',
          'absolute',
          'text-gray-400',
          'hover:bg-gray-500',
        ]"
        @click="iconClick"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import "uno.css";
import { defineComponent, computed, ref, PropType } from "vue";

export type ISize = "small" | "medium" | "large";
export const props = {
  type: {
    type: String,
    default: "default", // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  placeholder: {
    type: String,
    default: "请输入",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  password: {
    type: Boolean,
    default: false,
  },
};

export default defineComponent({
  name: "MInput",
  props, // 注册属性
  emits: ["update:input", "iconClick"],
  setup(props, { emit }) {
    // const iconDisplay = computed(() => {
    //   return props.clearable
    //     ? "i-ic-outline-cancel text-gray-400 hover:bg-gray-500"
    //     : props.icon
    //     ? `i-ic-baseline-${props.icon}`
    //     : "";
    // });

    const sizeMap = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
        r: "8",
      },
      medium: {
        x: "3",
        y: "2",
        text: "base",
        r: "8",
      },
      large: {
        x: "5",
        y: "3",
        text: "lg",
        r: "9",
      },
    };

    const canClear = computed(
      () => input.value != "" && props.icon === "" && props.clearable
    );
    const clear = () => {
      if (props.clearable) {
        // 点击了清除按钮
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
      onInput,
    };
  },
});
</script>

<style lang="less">
.m-input-wrapper {
  .text-input {
    display: inline-block;
    position: relative;

    .icon-in {
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
