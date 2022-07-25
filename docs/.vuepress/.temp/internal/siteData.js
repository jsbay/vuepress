export const siteData = JSON.parse("{\"base\":\"/vuepress/\",\"lang\":\"zh-CN\",\"title\":\"Bay丶\",\"description\":\"Bay丶的个人博客\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"type\":\"image/x-icon\",\"href\":\"./favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
