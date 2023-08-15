<template>
  <div>
    <button
      :class="[
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
};

export default defineComponent({
  name: "SFCButton",
  props, // 注册属性
});
</script>
