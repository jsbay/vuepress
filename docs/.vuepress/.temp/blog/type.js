export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-ccb9f3ac","v-7fc12214","v-48a8b8bb","v-48ad63ce","v-0e22b024","v-7d269cef","v-181f3646","v-1b3e8426","v-f4768d0e","v-69daf29e","v-1937ed80","v-27828bd3","v-18c88eaa","v-05ed259b","v-9212b00a"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

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
