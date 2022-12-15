export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-99378618","v-0be500e6","v-c1312892","v-072e23f8","v-7ae11416","v-644ebf78","v-093c8d8b","v-7299c4ee","v-7adfb4ea","v-d2b346c8","v-7fc12214","v-48a8b8bb","v-48ad63ce","v-4ec49b6a","v-adabbb40","v-21586622","v-0e22b024","v-7d269cef","v-f3b7e75c","v-181f3646","v-1b3e8426","v-f4768d0e","v-69daf29e","v-1937ed80","v-27828bd3","v-3313ae8e","v-89fc3126","v-18c88eaa","v-05ed259b","v-9212b00a"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
