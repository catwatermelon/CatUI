# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MButton>默认按钮</MButton>
    <MButton type="primary">主要按钮</MButton>
    <MButton type="danger">危险按钮</MButton>
    <MButton type="warning">警告按钮</MButton>
    <MButton type="success">成功按钮</MButton>
  </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MButton>默认按钮</MButton>
    <MButton type="primary" ghost>主要按钮</MButton>
    <MButton type="danger" ghost>危险按钮</MButton>
    <MButton type="warning" ghost>警告按钮</MButton>
    <MButton type="success" ghost>成功按钮</MButton>
  </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MButton size="small" ghost>小按钮</MButton>
    <MButton size="medium" ghost>中按钮</MButton>
    <MButton size="large" ghost>大按钮</MButton>
 </div>

  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MButton type="primary" round icon="search"></MButton>
    <MButton type="warning" round icon="edit"></MButton>
    <MButton type="danger" round icon="check"></MButton>
    <MButton type="success" round icon="message"></MButton>
    <MButton type="danger" icon="delete"></MButton>
 </div>
</template>
```
:::
