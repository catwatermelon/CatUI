<template>
  <div class="m-tree">
    <div v-for="(item, index) in list" :key="index">
      <div class="root" @click="selectedItem(item)">
        <span
          v-if="item.children?.length"
          class="arrow"
          @click="toggleDisplay(item)"
        >
          <i
            :class="[
              'icon',
              item.show ? 'i-ic-arrow-drop-down' : 'i-ic-arrow-drop-up',
            ]"
          ></i>
        </span>
        {{ item.name }}
      </div>
      <MTree
        v-if="item.show"
        :list="item.children"
        :selectedList="selectedList.slice().concat(item.name)"
      ></MTree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MTree",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    showChildren: {
      type: Boolean,
      default: false,
    },
    selectedList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const toggleDisplay = (item) => {
      item.show = !item.show;
    };
    const selectedItem = (item) => {
      const data = props.selectedList.slice().concat(item.name);
      emit("selectedItem", data);
    };
    return { toggleDisplay, selectedItem };
  },
});
</script>

<style lang="less" scoped>
.m-tree {
  margin-left: 20px;
  .root {
    .arrow {
      position: relative;
      .icon {
        position: absolute;
        left: -16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .leaf {
    margin-left: 20px;
  }
}
</style>
