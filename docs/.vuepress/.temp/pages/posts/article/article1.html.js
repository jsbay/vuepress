export const data = JSON.parse("{\"key\":\"v-03842690\",\"path\":\"/posts/article/article1.html\",\"title\":\"文章 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"文章 1 nginx 标题 3 这里是内容。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jsbay.github.io/vuepress/vuepress/posts/article/article1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Bay丶\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章 1\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"nginx\",\"slug\":\"nginx\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.1,\"words\":331},\"filePathRelative\":\"posts/article/article1.md\"}")

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
