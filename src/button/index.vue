<template>
  <div>
    <button
      :class="[
        `py-${sizeMap[size].y}`,
        `px-${sizeMap[size].x}`,
        `text-${sizeMap[size].text}`,
        'py-2',
        'px-4',
        'font-semibold',
        'rounded-lg',
        'shadow-md',
        'text-white',
        `bg-${$props.color}-500`,
        { hover: `bg-${$props.color}-700` },
        'border-none',
        'cursor-pointer',
        'm-1',
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import "uno.css";
import { PropType, defineComponent } from "vue";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
};

export default defineComponent({
  name: "SFCButton",
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
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return {
      sizeMap,
    };
  },
});
</script>
