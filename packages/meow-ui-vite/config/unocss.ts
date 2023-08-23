import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

// const types = ['primary', 'warning', 'danger', 'success']

const types = ['blue', 'yellow', 'red', 'green', 'gray'];

const safelist = [
    'text-white',
    ...types.map(t => `border-${t}-400`),
    ...types.map(t => `border-${t}-500`),
    ...types.map(t => `hover:border-${t}-500`),

    ...types.map(t => `bg-${t}-100`),
    ...types.map(t => `bg-${t}-200`),
    ...types.map(t => `bg-${t}-400`),
    ...types.map(t => `hover:bg-${t}-500`),

    ...types.map(t => `text-${t}-400`),
    ...types.map(t => `text-${t}-600`),

    'hover:text-white',

    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...Array.from({ length: 14 }, (_, i) => `p-r-${i + 1}`),
    ...Array.from({ length: 14 }, (_, i) => `p-l-${i + 1}`),
    ...["rounded-full", "rounded-lg"],
    ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
    ...[
        "search",
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",
        'ic:outline-cancel',
    ].map((v) => `i-ic-baseline-${v}`),
    ...[
        'cancel'
    ].map((v) => `i-ic-outline-${v}`),
];

export default () =>
    Unocss({
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()]
    });
{ }