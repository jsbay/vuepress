<template><div><h1 id="浏览器打开图片链接为什么有时候是预览有时候是下载" tabindex="-1"><a class="header-anchor" href="#浏览器打开图片链接为什么有时候是预览有时候是下载" aria-hidden="true">#</a> 浏览器打开图片链接为什么有时候是预览有时候是下载</h1>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>还是老样子，文章前面先上答案，没空的靓仔可以不往下看
浏览器打开图片链接是直接预览还是下载取决于图片链接的响应头<code v-pre>Content-Disposition</code>的属性:</p>
<ul>
<li><code v-pre>inline</code>: 在浏览器打开直接预览</li>
<li><code v-pre>attachment</code>: 在浏览器打开直接下载</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<p><a href="https://juejin.cn/post/7177346491059535932" target="_blank" rel="noopener noreferrer">浏览器打开图片链接为什么有时候是预览有时候是下载<ExternalLinkIcon/></a></p>
</div></template>


