# 🎉 Meow-UI 
 

<p align="center">
    <img src="https://img.shields.io/npm/v/meow-ui?color=c95f8b&amp;label=" alt="NPM version">
    <img src="https://github.com/catwatermelon/meow-ui/actions/workflows/main.yml/badge.svg?branch=master" alt="CI" style="max-width: 100%;"/>
    <img src="https://img.shields.io/github/license/catwatermelon/meow-ui?color=red"/>
    <a href="https://codecov.io/gh/catwatermelon/meow-ui" >
     <img src="https://codecov.io/gh/catwatermelon/meow-ui/graph/badge.svg?token=38JNSD1PK1"/>
    </a>
</p>


## Features

- ⚡️ Vue 3, Vite 3, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## Install

```bash
npm i meow-ui
```

## Quick Start

```js
import Vue from 'vue'
import MeowUI from 'meow-ui'

const App = {
    template: `
        <MButton/>
    `,
};

createApp(App)
    .use(MeowUI)
    .mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.


## LICENSE

[MIT](LICENSE)


Copyright (c) 2023 Zhen Tong (catwatermelon) Ling
