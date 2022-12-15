# webpack 相关配置

## 打包时 移除 console

### 安装 terser-webpack-plugin

::: code-tabs#bash

@tab:active yarn

```bash
yarn add terser-webpack-plugin@4.2.3 -D
```

@tab npm

```bash
npm install terser-webpack-plugin@4.2.3 -D
```

:::

### vue.config.js 配置

```js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 移除所有console相关代码；
              drop_debugger: true, // 移除自动断点功能；
              pure_funcs: ["console.log", "console.error"], // 配置移除指定的指令，如console.log,alert等
            },
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
  },
};
```

## CDN 引入

> 参考: https://juejin.cn/post/6844903928761417741#heading-18

对于一些不常改动的模块库，例如： `vue` `vueRouter` `vuex` `echarts` `element-ui` 等， 我们让 `webpack` 不将他们进行打包，而是 ==**通过 CDN 引入，这样就可以减少代码大小，减少服务器带宽，并通过 cdn 将它们缓存起来，提高网站性能**== 。

```js
// vue.config.js
const cdn = {
  css: [
    // element-ui css
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
  ],
  js: [
    // vue
    "https://unpkg.com/vue/2.5.22/vue.min.js",
    // element-ui
    "https://unpkg.com/element-ui/lib/index.js",
    // vuex
    "https://unpkg.com/vuex/3.1.0/vuex.min.js",
  ],
};
// 不打包vue、element-ui、vuex
module.exports = {
  externals: {
    vue: "Vue",
    "element-ui": "ELEMENT",
    vuex: "Vuex",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
  },
};
```

```html
<!-- /public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <% if (process.env.NODE_ENV === 'production') { %>
    <!-- 引入样式 -->
    <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%=css%>" />
    <% } %>
    <!-- 引入js -->
    <% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%=js%>"></script>
    <% } %> <% } %>
    <title>vue-admin-webapp</title>
  </head>
  <body>
    <noscript>
      <strong
        >很抱歉, xxx 系统不能在 JavaScript 未启动的情况下正常运行. 请允许
        JavaScript 使用后继续.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
