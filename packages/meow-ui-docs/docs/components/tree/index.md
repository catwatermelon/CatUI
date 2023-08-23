# Tree 树形结构
用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

:::demo
```vue
<template>
  <div style="display: flex; gap: 16px; margin-bottom:20px;">
    <MTree :list="[
    {
        name: '1',
        show: true,
        children: [
            {
                name: '1-1',
                show: true,
            },
            {
                name: '1-2',
                children: [
                    {
                        name: '1-2-1',
                        show: true,
                    }
                ],
                show: true,
            }
        ]
    },
    {
        name: '2',
        show: true,
        children: [
            {
                name: '2-1',
                show: true,

                children: [
                    {
                        name: '2-1-1',
                        show: true,

                        children: [
                            {
                                name: '2-1-1-1',
                                show: true,

                            }
                        ]
                    },
                    {
                        name: '2-1-2',
                        show: true,

                    }
                ]
            },
        ]
    },
    {
        name: '3',
        show: true,
        children: []
    }
]
"></MTree>
  </div>
</template>
```
:::

