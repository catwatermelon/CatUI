import Button from "../index.vue";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe('Button-Text', () => {
    // mount
    test("mount  @vue/test-utils", () => {
        // @vue/test-utils
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            }
        });

        // 断言
        expect(wrapper.text()).toBe("Button");
    });
})



describe('Button-Bg-Color', () => {
    test("primary", () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            },
            props: {
                type: 'primary'
            }
        });
        expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-400')).toBe(true)
    });

    test("primary-ghost", () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            },
            props: {
                type: 'primary',
                ghost: true
            }
        });
        expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-200')).toBe(true)
    });
})


describe('Button-Round', () => {
    test("rounded-full", () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            },
            props: {
                type: 'primary',
                round: true
            }
        });
        expect(wrapper.classes().map(v => v.replace('\n', '')).includes('rounded-full')).toBe(true)
    });

    test("rounded-lg", () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            },
            props: {
                type: 'primary',
            }
        });
        expect(wrapper.classes().map(v => v.replace('\n', '')).includes('rounded-lg')).toBe(true)
    });
})