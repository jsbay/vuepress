<template><div><h1 id="v-for-v-if-为什么不推荐同时使用" tabindex="-1"><a class="header-anchor" href="#v-for-v-if-为什么不推荐同时使用" aria-hidden="true">#</a> v-for v-if 为什么不推荐同时使用?</h1>
<p>在 vue2 中, <code v-pre>v-for</code> 的优先级 &gt; <code v-pre>v-if</code>，所以会导致 先循环渲染，再通过 <code v-pre>v-if</code> 进行判断，会造成性能问题，推荐使用 <code v-pre>computed</code> 属性，将数据过滤以后再使用 <code v-pre>v-for</code></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<ol>
<li><a href="https://juejin.cn/post/6844904183619944462" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904183619944462<ExternalLinkIcon/></a></li>
</ol>
</div>
</div></template>


