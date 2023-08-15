import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];

const safelist = [
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-700`),
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
];

export default () =>
    Unocss({
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()],
    });
