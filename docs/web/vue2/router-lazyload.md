# 路由懒加载

## 为什么要使用路由懒加载？

构建 应用时，JavaScript 包会非常大，影响页面加载速度，通过路由懒加载，将不同路由对应的组件分割成不同的代码块，在路由被访问的时候才加载对应的组件

## 怎么使用

```js
const router = createRouter({
  // ...
  routes: [
    {
      path: "/users/:id",
      component: () => import("./views/UserDetails"),
    },
  ],
});
```

:::info 自定义一个方法加载路由

```js
const lazyLoad = (view) => {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
};

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: lazyLoad("Home"),
    },
    {
      path: "/about",
      name: "about",
      component: lazyLoad("About"),
    },
  ],
});
```

:::
