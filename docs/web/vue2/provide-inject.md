# vue 跨组件通信之 provide/inject

## provide/inject

在 Vue2.2.0 之后，Vue 提供了 `provide/inject` 选项，这对选项允许一个祖先组件向其所有子孙后代组件注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
**==在父组件只要声明了 `provide`，在其子组件，孙组件，曾孙组件等能形成上下游关系的组件中交互，无论多深都能通过 `inject` 来访问 `provider` 中的数据，而不是局限于只能从当前父组件的 prop 属性来获取==**，所以可以把 `provide` 看作大范围的有效的 `prop`。注意他只能做祖先通后代的单向传递的一个办法。这对选项任意层级的子组件都能访问到。

```js
// 父组件提供provide
export default {
  name: "father",
  provide: {
    test: "wawawa",
    age: "20",
  },
  data() {},
};

// 子组件 或 孙组件 或 ...
export default {
  name: 'children',
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
  },
  // 子组件接受注入的值
  inject: ['test', 'age'], // 子组件使用
  data() {
    return {};
  },
  created() {
    console.log(this.test, 'test=========');
    console.log(this.age, 'age=========');
  },
}

```

## TODO

学习一下 vue2 如何使 provide/inject 变成响应式

## 参考

1.  👍 [聊聊 Vue 中 provide/inject 的应用](https://juejin.cn/post/6844903989935341581)
2.  [Vue2 关于 inject 和 provide 源码解析](https://juejin.cn/post/7067493099856986142)
3.  [vue2 中的 provide inject 传递响应式](https://juejin.cn/post/6964575724925616142)
