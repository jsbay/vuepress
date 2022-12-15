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

## 示例

### 创建和 更新 组件切换

```html
<template>
  <div id="app">
    <el-button type="primary" @click="onCreate">创建</el-button>
    <el-button type="primary" @click="onUpdate">修改</el-button>
    <!-- 传递的参数会传递到所有组件中去 -->
    <component ref="component" :is="componentName" :info="info" />
  </div>
</template>

<script>
  import createComponent from "./CreateDialog";
  import updateComponent from "./UpdateDialog";
  export default {
    name: "App",
    components: {
      createComponent,
      updateComponent,
    },
    data() {
      return {
        info: {
          name: "张三",
          age: 20,
        },
        componentName: "createComponent",
      };
    },
    methods: {
      // 创建
      onCreate() {
        this.componentName = "createComponent";
        // this.$refs.component.visible = true; // 可能会出现点击两次才会打开的情况
        // 解决可能会出现点击两次才会打开的情况
        this.$nextTick(() => {
          this.$refs.component.visible = true;
        });
      },
      // 修改
      onUpdate() {
        this.componentName = "updateComponent";
        this.$nextTick(() => {
          this.$refs.component.visible = true;
        });
      },
    },
  };
</script>
```

### 通过 `el-tab` 切换 动态组件

```html
<template>
  <el-dialog
    :title="dialogTitle"
    width="1200px"
    :top="dialogTop"
    :visible.sync="visible"
    class="task-info-dialog"
  >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- 传递的参数会传递到所有组件中去 -->
    <component :is="activeName" :info="info" />
  </el-dailog>
</template>

<script>
import first from './first'
import second from './second'
import third from './third'
import fourth from './fourth'
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
```
