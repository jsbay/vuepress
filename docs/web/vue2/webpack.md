# vue2 webpack 相关配置

## 打包时 移除 console

### 安装 terser-webpack-plugin

::: code-tabs#bash

@tab:active yarn

```bash
yarn add terser-webpack-plugin -D
```

@tab npm

```bash
npm install terser-webpack-plugin -D
```

:::

### vue.config.js 配置

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 移除所有console相关代码；
              drop_debugger: true, // 移除自动断点功能；
              pure_funcs: ['console.log', 'console.error'], // 配置移除指定的指令，如console.log,alert等
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
