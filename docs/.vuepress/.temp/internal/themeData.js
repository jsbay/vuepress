export const themeData = JSON.parse("{\"blog\":{\"description\":\"一个前端开发者\",\"intro\":\"/intro.html\",\"medias\":{\"GitHub\":\"https://jsbay.github.io/vuepress\"}},\"encrypt\":{\"config\":{\"/guide/encrypt.html\":[\"$2a$10$862xOtLqK2zZevJGgeKmretpfWNhLz1jQNrm5tTaalXQNZtqHz5Ya\"]}},\"pure\":false,\"darkmode\":\"toggle\",\"themeColor\":{\"red\":\"#f26d6d\",\"green\":\"#3eaf7c\",\"orange\":\"#fb9b5f\"},\"fullscreen\":true,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/web/vue2/\":[\"PWA\",\"depoly\",\"router-lazyload\",\"dynamic-components\",\"v-for-v-if\",\"excel\",\"eslint\",\"webpack\",\"mock\",\"page-custom\"],\"/sys/mac/\":[],\"/sys/win/\":[\"nginx2service\"],\"/sys/linux/\":[],\"/other\":[\"git\",\"docker\",\"hym\"],\"/other/git/\":[\"oh-my-zsh-alias\",\"multiple-remote\",\"frontend-git-commit-constraints\"],\"/other/docker/\":[\"oracle\"],\"/other/hym/\":[\"ql-panel\"]},\"sidebarIcon\":false,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\",\"slides\":\"幻灯片\",\"encrypt\":\"加密\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbarLayout\":{\"left\":[\"Brand\"],\"center\":[],\"right\":[\"Links\",\"Language\",\"Repo\",\"Outlook\",\"Search\"]},\"author\":{\"name\":\"Bay丶\",\"url\":\"https://jsbay.github.io/vuepress/\"},\"logo\":\"/logo.png\",\"repo\":\"jsbay/vuepress\",\"docsDir\":\"/docs\",\"navbar\":[\"/\",{\"text\":\"前端\",\"icon\":\"web\",\"prefix\":\"/web/\",\"children\":[{\"text\":\"vue2\",\"icon\":\"edit\",\"link\":\"vue2\"}]},{\"text\":\"系统\",\"icon\":\"web\",\"prefix\":\"/sys/\",\"children\":[{\"text\":\"mac\",\"icon\":\"edit\",\"link\":\"mac\"},{\"text\":\"win\",\"icon\":\"edit\",\"link\":\"win\"},{\"text\":\"linux\",\"icon\":\"edit\",\"link\":\"linux\"}]},{\"text\":\"微信\",\"icon\":\"weixin\",\"prefix\":\"/weixin/\",\"children\":[{\"text\":\"regex\",\"icon\":\"edit\",\"link\":\"regex\"}]},{\"text\":\"其它\",\"icon\":\"other\",\"prefix\":\"/other/\",\"children\":[{\"text\":\"git\",\"icon\":\"edit\",\"link\":\"git\"},{\"text\":\"docker\",\"icon\":\"edit\",\"link\":\"docker\"},{\"text\":\"薅羊毛\",\"icon\":\"edit\",\"link\":\"hym\"}]}],\"footer\":\"\",\"displayFooter\":true,\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
