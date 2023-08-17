<template>
  <div class="m-button-wrapper">
    <button
      type="button"
      :class="[
        `text-${ghost ? type2Color[type] + '-600' : 'white'}`,
        `hover:text-${ghost ? 'white' : type2Color[type] + '-400'}`,
        `bg-${type2Color[type]}-${ghost ? 200 : 400}`,
        `hover:bg-${type2Color[type]}-${ghost ? 500 : 500}`,
        `border-${type2Color[type]}-${ghost ? 500 : 400}`,
        `hover:border-${type2Color[type]}-500`,
        `py-${sizeMap[size].y}`,
        `px-${sizeMap[size].x}`,
        `text-${sizeMap[size].text}`,
        `${round ? 'rounded-full' : 'rounded-lg'}`,
        'cursor-pointer',
        'transition duration-300 ease-in-out transform hover:scale-105',
        'mx-1',
      ]"
    >
      <i v-if="icon" :class="[`i-ic-baseline-${icon}`, 'p-3']"></i>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import "uno.css";
import { PropType, defineComponent } from "vue";
import { type2Color } from "../../config/colors";

export type IType = "primary" | "warning" | "danger" | "success" | "default";
export type ISize = "small" | "medium" | "large";

export const props = {
  type: {
    type: String as PropType<IType>,
    default: "default", // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String as PropType<string>,
    default: "",
  },
};

export default defineComponent({
  name: "MButton",
  props, // 注册属性
  setup() {
    const sizeMap = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "2",
        text: "base",
      },
      large: {
        x: "5",
        y: "3",
        text: "lg",
      },
    };

    return {
      sizeMap,
      type2Color,
    };
  },
});
</script>
