# 浏览器打开图片链接为什么有时候是预览有时候是下载

## 答案

还是老样子，文章前面先上答案，没空的靓仔可以不往下看
浏览器打开图片链接是直接预览还是下载取决于图片链接的响应头`Content-Disposition`的属性:

- `inline`: 在浏览器打开直接预览
- `attachment`: 在浏览器打开直接下载

## 参考

[浏览器打开图片链接为什么有时候是预览有时候是下载](https://juejin.cn/post/7177346491059535932)
