<template><div><h1 id="青龙面板相关操作" tabindex="-1"><a class="header-anchor" href="#青龙面板相关操作" aria-hidden="true">#</a> 青龙面板相关操作</h1>
<h2 id="拉库" tabindex="-1"><a class="header-anchor" href="#拉库" aria-hidden="true">#</a> 拉库</h2>
<p>格式说明</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 对应意思 “库地址”  “拉哪些”  “不拉哪些”   “依赖文件”    “分支”</span>
ql repo <span class="token operator">&lt;</span>repourl<span class="token operator">></span> <span class="token operator">&lt;</span>path<span class="token operator">></span> <span class="token operator">&lt;</span>blacklist<span class="token operator">></span> <span class="token operator">&lt;</span>dependence<span class="token operator">></span> <span class="token operator">&lt;</span>branch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="faker3" tabindex="-1"><a class="header-anchor" href="#faker3" aria-hidden="true">#</a> faker3</h3>
<blockquote>
<p>内部互助版【安全本地 sign 防 CK 泄漏</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git <span class="token string">"jd_|jx_|gua_|jddj_|jdCookie"</span> <span class="token string">"activity|backUp"</span> <span class="token string">"^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts"</span> <span class="token string">"main"</span>

<span class="token comment"># 不拉取 禁用脚本版</span>
ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git <span class="token string">"jd*|jx*|gua*|jddj*|jdCookie"</span> <span class="token string">"activity|backUp|jd*identical"</span> <span class="token string">"^jd[^*]|USER|function|utils|sendNotify|ZooFaker*Necklace.js|JDJRValidator*|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts"</span> <span class="token string">"main"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="faker2" tabindex="-1"><a class="header-anchor" href="#faker2" aria-hidden="true">#</a> faker2</h3>
<blockquote>
<p>助力池版【安全本地 sign 防 CK 泄漏】</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git <span class="token string">"jd*|jx*|gua*|jddj*|jdCookie"</span> <span class="token string">"activity|backUp"</span> <span class="token string">"^jd[^_]|USER|function|utils|sendNotify|ZooFaker*Necklace.js|JDJRValidator*|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts"</span> <span class="token string">"main"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kingran" tabindex="-1"><a class="header-anchor" href="#kingran" aria-hidden="true">#</a> KingRan</h3>
<blockquote></blockquote>
</div></template>


