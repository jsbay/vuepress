<template><div><h1 id="vue-跨组件通信之-provide-inject" tabindex="-1"><a class="header-anchor" href="#vue-跨组件通信之-provide-inject" aria-hidden="true">#</a> vue 跨组件通信之 provide/inject</h1>
<h2 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide/inject</h2>
<p>在 Vue2.2.0 之后，Vue 提供了 <code v-pre>provide/inject</code> 选项，这对选项允许一个祖先组件向其所有子孙后代组件注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
<strong><mark>在父组件只要声明了 <code v-pre>provide</code>，在其子组件，孙组件，曾孙组件等能形成上下游关系的组件中交互，无论多深都能通过 <code v-pre>inject</code> 来访问 <code v-pre>provider</code> 中的数据，而不是局限于只能从当前父组件的 prop 属性来获取</mark></strong>，所以可以把 <code v-pre>provide</code> 看作大范围的有效的 <code v-pre>prop</code>。注意他只能做祖先通后代的单向传递的一个办法。这对选项任意层级的子组件都能访问到。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件提供provide</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"father"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">"wawawa"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 子组件 或 孙组件 或 ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'children'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dataInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 子组件接受注入的值</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 子组件使用</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">,</span> <span class="token string">'test========='</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">'age========='</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
<p>学习一下 vue2 如何使 provide/inject 变成响应式</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ol>
<li>👍 <a href="https://juejin.cn/post/6844903989935341581" target="_blank" rel="noopener noreferrer">聊聊 Vue 中 provide/inject 的应用<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7067493099856986142" target="_blank" rel="noopener noreferrer">Vue2 关于 inject 和 provide 源码解析<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6964575724925616142" target="_blank" rel="noopener noreferrer">vue2 中的 provide inject 传递响应式<ExternalLinkIcon/></a></li>
</ol>
</div></template>


