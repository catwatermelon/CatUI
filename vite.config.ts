import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
        exports: 'named',
        assetFileNames: `assets/[name].[ext]`,
    },
};

export default defineConfig({
    plugins: [
        vue(),    // 添加JSX插件
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        Unocss()
    ],
    build: {
        rollupOptions,
        minify: 'terser',
        sourcemap: true, // 输出单独 source文件
        brotliSize: true,  // 生成压缩大小报告
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "MeowUI",
            fileName: "meow-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
});