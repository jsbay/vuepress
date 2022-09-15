import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,e}from"./app.debf6241.js";const l={},i=e(`<h1 id="oracle-\u7532\u9AA8\u6587\u670D\u52A1\u5668\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#oracle-\u7532\u9AA8\u6587\u670D\u52A1\u5668\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> oracle \u7532\u9AA8\u6587\u670D\u52A1\u5668\u5E38\u7528\u547D\u4EE4</h1><h2 id="\u4E00\u4E9B\u5E38\u7528\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u7528\u7684\u547D\u4EE4" aria-hidden="true">#</a> \u4E00\u4E9B\u5E38\u7528\u7684\u547D\u4EE4</h2><ul><li>\u8FDB\u5165 docker \u5BB9\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> qinglong /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u542F\u52A8\u6240\u6709\u5BB9\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5173\u95ED\u6240\u6709\u5BB9\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>- <span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5220\u9664\u6240\u6709\u5BB9\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5220\u9664\u6240\u6709\u955C\u50CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> p_w_picpaths <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token operator">|</span><span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u91CD\u542F\u6240\u6709\u5BB9\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> restart <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-\u5BB9\u5668\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u81EA\u542F\u52A8" aria-hidden="true">#</a> docker \u5BB9\u5668\u81EA\u542F\u52A8</h2><h3 id="\u65B9\u6848-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-1" aria-hidden="true">#</a> \u65B9\u6848 1</h3><div class="custom-container info"><p class="custom-container-title">\u5728\u521B\u5EFA\u5BB9\u5668\u65F6\u8BBE\u7F6E\uFF0C\u6DFB\u52A0\u53C2\u6570 \`--restart=always\`</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> \u8BBE\u7F6E\u5BB9\u5668\u540D \u4F7F\u7528\u7684\u955C\u50CF
\uFF08\u4E0A\u9762\u547D\u4EE4  --name\u540E\u9762\u4E24\u4E2A\u53C2\u6570\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u81EA\u884C\u4FEE\u6539\uFF09

<span class="token comment"># Docker \u5BB9\u5668\u7684\u91CD\u542F\u7B56\u7565\u5982\u4E0B\uFF1A</span>
 --restart\u5177\u4F53\u53C2\u6570\u503C\u8BE6\u7EC6\u4FE1\u606F\uFF1A
       no\u3000\u3000\u3000\u3000\u3000\u3000\u3000 // \u9ED8\u8BA4\u7B56\u7565,\u5BB9\u5668\u9000\u51FA\u65F6\u4E0D\u91CD\u542F\u5BB9\u5668\uFF1B
       on-failure\u3000\u3000  // \u5728\u5BB9\u5668\u975E\u6B63\u5E38\u9000\u51FA\u65F6\uFF08\u9000\u51FA\u72B6\u6001\u975E0\uFF09\u624D\u91CD\u65B0\u542F\u52A8\u5BB9\u5668\uFF1B
       on-failure:3    // \u5728\u5BB9\u5668\u975E\u6B63\u5E38\u9000\u51FA\u65F6\u91CD\u542F\u5BB9\u5668\uFF0C\u6700\u591A\u91CD\u542F3\u6B21\uFF1B
       always\u3000\u3000\u3000\u3000  // \u65E0\u8BBA\u9000\u51FA\u72B6\u6001\u662F\u5982\u4F55\uFF0C\u90FD\u91CD\u542F\u5BB9\u5668\uFF1B
       unless-stopped  // \u5728\u5BB9\u5668\u9000\u51FA\u65F6\u603B\u662F\u91CD\u542F\u5BB9\u5668\uFF0C\u4F46\u662F\u4E0D\u8003\u8651\u5728 Docker \u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8\u65F6\u5C31\u5DF2\u7ECF\u505C\u6B62\u4E86\u7684\u5BB9\u5668\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6848-2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-2" aria-hidden="true">#</a> \u65B9\u6848 2</h3><div class="custom-container info"><p class="custom-container-title">\u4F7F\u7528 \`update\` \u4FEE\u6539\u5DF2\u6709\u5BB9\u5668</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always \u5BB9\u5668ID<span class="token punctuation">(</span>\u6216\u8005\u5BB9\u5668\u540D<span class="token punctuation">)</span>
<span class="token comment"># \u5BB9\u5668ID\u6216\u8005\u5BB9\u5668\u540D\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),r=[i];function c(t,p){return s(),n("div",null,r)}const u=a(l,[["render",c],["__file","oracle.html.vue"]]);export{u as default};
