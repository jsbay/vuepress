import { defineUserConfig } from "vuepress";

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
});
