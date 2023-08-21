# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MSwitch  />
  </div>
</template>
```
:::


## 禁用状态

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MSwitch disabled/>
  </div>
</template>
```
:::

## 文字描述

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column ;margin-bottom:20px;">
    <MSwitch active-text="开启" inactive-text='关闭'  style="margin-bottom: 20px"/>
    <MSwitch active-text="开启"   style="margin-bottom: 20px"/>
    <MSwitch inactive-text='关闭'  />
  </div>
</template>
```
:::

