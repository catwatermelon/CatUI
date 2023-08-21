import { createApp } from "vue/dist/vue.esm-bundler.js";

import MeowUI from "./entry";

createApp({
    template: `
        <div>
            <MSwitch inactive-text="34" ></MSwitch>
            <MInput  clearable/>
            <MButton type="primary">主要按钮</MButton>
        </div>
    `,
})
    .use(MeowUI)
    .mount("#app");
