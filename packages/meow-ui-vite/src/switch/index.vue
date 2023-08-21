<template>
  <div class="m-switch-wrapper">
    <span v-if="inactiveText" class="m-r-1">{{ inactiveText }}</span>
    <input
      :class="['switch-btn']"
      type="checkbox"
      :disabled="disabled"
      @change="changeCheck"
    />
    <span v-if="activeText" class="m-l-1">{{ activeText }}</span>
  </div>
</template>

<script lang="ts">
import "uno.css";
import { PropType, defineComponent } from "vue";

export type ISize = "small" | "medium" | "large";

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
const props = {
  activeColor: {
    type: String,
    default: "blue",
  },
  inactiveColor: {
    type: String,
    default: "gray",
  },
  activeText: {
    type: String,
  },
  inactiveText: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  value: {
    type: Boolean,
    default: false,
  },
}; // 注册属性

export default defineComponent({
  name: "MSwitch",
  props, // 注册属性
  emits: ["update:input"],
  setup(props, { emit }) {
    const changeCheck = (e) => {
      emit("update:input", e.checked);
    };
    return {
      sizeMap,
      changeCheck,
    };
  },
});
</script>

<style lang="less" scoped>
.m-switch-wrapper {
  display: flex;
  align-items: center;
  .btn {
    border-radius: 31px;
    background-color: #e9e9eb;
    width: 46px;
    height: 24px;
  }
  .switch-btn {
    position: relative;
    appearance: none;
    cursor: pointer;
    transition: all 100ms;
    .btn;
    &::before {
      position: absolute;
      content: "";
      left: 2px;
      top: 1px;
      transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
      .btn;
    }
    &::after {
      position: absolute;
      left: 2px;
      top: 1px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #fff;
      box-shadow: 1px 1px 5px rgba(#000, 0.3);
      content: "";
      transition: all 300ms cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
    &:checked {
      background-color: #5eb662;
      &::before {
        transform: scale(0);
      }
      &::after {
        transform: translateX(22px);
      }
    }
  }
}
</style>
