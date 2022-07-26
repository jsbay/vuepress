# 动态组件

## 什么是动态组件

让多个组件使用同一个挂载点，并动态切换。

例子 🌰

```vue
<template>
  <div class="home">
    <component :is="currentComponent"></component>
  </div>
</template>
<script>
import Tab0 from "@/components/Tab0.vue";
import Tab1 from "@/components/Tab1.vue";
export default {
  data: () => {
    return {
      currentIndex: 0 // 通过改变 currentIndex 改变要挂载的组件名
    }
  },
  components: {
    "tab-0": Tab0,
    "tab-1": Tab1
  }
  currentComponent() { // 动态计算要挂载的组件的组件名
    return `tab-${this.currentIndex}`; // "tab-0" 、"tab-1"
  }
}
</script>
```

## 缓存

通过 `<keep-alive>` 保持组件状态,避免反复重渲染导致的性能问题。

```vue
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```
