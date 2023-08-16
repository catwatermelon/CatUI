# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <SFCButton>默认按钮</SFCButton>
    <SFCButton type="primary">主要按钮</SFCButton>
    <SFCButton type="danger">危险按钮</SFCButton>
    <SFCButton type="warning">警告按钮</SFCButton>
    <SFCButton type="success">成功按钮</SFCButton>
  </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <SFCButton>默认按钮</SFCButton>
    <SFCButton type="primary" ghost>主要按钮</SFCButton>
    <SFCButton type="danger" ghost>危险按钮</SFCButton>
    <SFCButton type="warning" ghost>警告按钮</SFCButton>
    <SFCButton type="success" ghost>成功按钮</SFCButton>
  </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <SFCButton size="small" ghost>小按钮</SFCButton>
    <SFCButton size="medium" ghost>中按钮</SFCButton>
    <SFCButton size="large" ghost>大按钮</SFCButton>
 </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <SFCButton type="primary" round icon="search"></SFCButton>
    <SFCButton type="warning" round icon="edit"></SFCButton>
    <SFCButton type="danger" round icon="check"></SFCButton>
    <SFCButton type="success" round icon="message"></SFCButton>
    <SFCButton type="danger" icon="delete"></SFCButton>
 </div>
</template>
```
:::
