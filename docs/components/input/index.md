# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MInput  />
  </div>
</template>
```
:::


## 禁用状态

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MInput disabled/>
  </div>
</template>
```
:::


## 可清空

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MInput clearable/>
  </div>
</template>
```
:::


## 密码框

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MInput password/>
  </div>
</template>
```
:::


## 带 icon 的输入框

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <div>
      <MInput icon="i-ic-baseline-search"/>
    </div>
    <div>
      <MInput icon="i-ic-baseline-autorenew"/>
    </div>
  </div>
</template>
```
:::


## 尺寸

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column ;margin-bottom:20px;">
    <MInput icon="i-ic-baseline-search" size="small" style="margin-bottom: 20px"/>
    <MInput icon="i-ic-baseline-search" style="margin-bottom: 20px"/>
    <MInput icon="i-ic-baseline-search" size="large"/>
  </div>
</template>
```
:::

