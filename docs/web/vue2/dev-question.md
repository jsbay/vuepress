# 开发中碰到的问题

## vue-admin-template

> 问题描述: 左侧 menu 菜单 切换时, vue 组件 `create` 中声明的`getData` 之类的方法仅第一次执行

> 问题解决: 可能是因为 router 中声明的 name 值 重复 的原因,可以尝试修改 name 再次尝试
