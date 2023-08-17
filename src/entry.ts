import { App } from "vue";
import MButton from "./button/index.vue";

export { MButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(MButton.name, MButton);
  },
};
