<template><div><h1 id="css-命名规范之-bem" tabindex="-1"><a class="header-anchor" href="#css-命名规范之-bem" aria-hidden="true">#</a> CSS 命名规范之 BEM</h1>
<h2 id="bem" tabindex="-1"><a class="header-anchor" href="#bem" aria-hidden="true">#</a> BEM</h2>
<blockquote>
<p>BEM（block、element、modifier）是一种基于组件的 Web 开发方法。其背后的想法是将用户界面划分为独立的块。这使得界面开发变得简单和快速，即使是在复杂的用户界面中，它也允许在不复制和粘贴的情况下重用现有代码。</p>
</blockquote>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.block__element-modifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Block
块，可重用的功能独立的页面组件。</li>
<li>element
块的子元素，不能单独使用。</li>
<li>modifier
定义块或元素的外观、状态或行为</li>
</ul>
<h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2>
<ol>
<li>element 不能嵌套 element, 例如：<code v-pre>block__elem1__elem2</code></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--
    Incorrect. The structure of the full element name doesn't follow the pattern:
    `block-name__element-name`
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form__content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Recommended: `search-form__input` or `search-form__content-input` --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form__content__input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token comment">&lt;!-- Recommended: `search-form__button` or `search-form__content-button` --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form__content__button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>modifier 前面不一定有 element</li>
</ol>
<ul>
<li><code v-pre>block-name_modifier-name</code></li>
<li><code v-pre>block-name__element-name_modifier-name</code></li>
</ul>
<ol start="3">
<li>modifier 可以是键值对</li>
</ol>
<ul>
<li><code v-pre>block-name_modifier-name_modifier-value</code></li>
<li><code v-pre>block-name__element-name_modifier-name_modifier-value</code></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form search-form_theme_islands<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form__input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

  <span class="token comment">&lt;!-- The `button` element has the `size` modifier with the value `m` --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-form__button search-form__button_size_m<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ol>
<li><a href="https://juejin.cn/post/7036346662473711646" target="_blank" rel="noopener noreferrer">CSS 规范 BEM<ExternalLinkIcon/></a></li>
<li>👍 <a href="https://juejin.cn/post/7126505567408881677" target="_blank" rel="noopener noreferrer">用了这些 css 命名小技巧，我的代码优雅了不少<ExternalLinkIcon/></a> 这个里面有命名规则推荐</li>
<li><a href="https://juejin.cn/post/6872592470866133000" target="_blank" rel="noopener noreferrer">CSS 命名-BEM 方法<ExternalLinkIcon/></a></li>
</ol>
</div></template>


