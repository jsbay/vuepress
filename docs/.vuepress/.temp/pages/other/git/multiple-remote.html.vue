<template><div><h1 id="添加多个-remote" tabindex="-1"><a class="header-anchor" href="#添加多个-remote" aria-hidden="true">#</a> 添加多个 remote</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化</span>
<span class="token function">git</span> init
<span class="token comment"># 添加远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@gitxxxx.com
<span class="token comment"># 添加第二个仓库</span>
<span class="token function">git</span> remote set-url --add origin ssh@gitxx2.com
<span class="token comment"># 添加所有文件至本地暂存</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 添加提交信息并提交至本地仓库</span>
<span class="token function">git</span> commit -m <span class="token string">'init'</span>
<span class="token comment"># 推送至 远程仓库</span>
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
