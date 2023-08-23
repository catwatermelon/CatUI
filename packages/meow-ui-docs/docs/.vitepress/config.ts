import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

const sidebar = {
    '/components/': [
        {
            text: '通用',
            items: [
                { text: 'Button 按钮', link: '/components/button/' },
                { text: 'Input 输入框', link: '/components/input/' },
                { text: 'Switch 开关', link: '/components/switch/' },
                { text: 'Tree 树形控件', link: '/components/tree/' },
            ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}
const custom = {
    title: 'MeowUI 文档',
    description: 'MeowUI 组件库文档',
    siteTitle: 'VitePress-Cat'
}

const nav = [
    { text: '首页', link: '/' },
    { text: '起步', link: '/guide/' },
    { text: '组件', link: '/components/button/' },
    {
        text: '关于',
        items: [
            { text: 'Github', link: 'https://github.com/catwatermelon/meow-ui' },
            { text: '掘金', link: 'https://juejin.cn/user/3280598430652264' }
        ]
    }
]

const config = {
    ...custom,
    themeConfig: {
        nav,
        sidebar,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023 CatWatermelon'
        },
    },
    markdown: {
        config: (md) => {
            md.use(demoblockPlugin)
        }
    },
    vite: {
        plugins: [demoblockVitePlugin()]
    }
}
export default config

