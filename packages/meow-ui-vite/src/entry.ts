import { App } from "vue";
import MButton from "./button/index.vue";
import MInput from "./input/index.vue";

export { MButton, MInput };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(MButton.name, MButton);
    app.component(MInput.name, MInput);
  },
};
