export const data = JSON.parse("{\"key\":\"v-05ed259b\",\"path\":\"/web/vue2/v-for-v-if.html\",\"title\":\"v-for v-if 为什么不推荐同时使用?\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"v-for v-if 为什么不推荐同时使用? 在 vue2 中, v-for 的优先级 > v-if，所以会导致 先循环渲染，再通过 v-if 进行判断，会造成性能问题，推荐使用 computed 属性，将数据过滤以后再使用 v-for 参考 参考 1. https://juejin.cn/post/6844904183619944462\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jsbay.github.io/vuepress/vuepress/web/vue2/v-for-v-if.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Bay丶\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"v-for v-if 为什么不推荐同时使用?\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":0.27,\"words\":81},\"filePathRelative\":\"web/vue2/v-for-v-if.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
