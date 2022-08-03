import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Bay丶",
  description: "Bay丶的个人博客",
  base: "/vuepress/",
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ],
  theme,
  plugins: [
    docsearchPlugin({
      appId: 'Z2RFYFB6CS',
      apiKey: '2f0ea4e8b9b0b084fe24c63a5c942ebc',
      indexName: 'jsbay',
    })
  ],
});
