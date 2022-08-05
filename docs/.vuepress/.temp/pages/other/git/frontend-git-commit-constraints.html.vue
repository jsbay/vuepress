<template><div><h1 id="前端项目-git-提交约束" tabindex="-1"><a class="header-anchor" href="#前端项目-git-提交约束" aria-hidden="true">#</a> 前端项目 git 提交约束</h1>
<p><a href="https://juejin.cn/post/7041768022284976165" target="_blank" rel="noopener noreferrer">用 Eslint+Prettier+husky+commitlint+lint-staged+commitizen 快速搭建标准化编程规范项目<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li><code v-pre>commitizen</code> : 提供 <code v-pre>cli</code>; 通过<code v-pre>cli</code>提交， 从而规范标准的 git 提交方式， 一般<strong>全局安装</strong></li>
<li><code v-pre>cz-customizable</code> : 对 <code v-pre>commitizen</code> 进行自定义配置</li>
<li><code v-pre>lint-staged</code> : 校验代码格式是否符合 设置的 <code v-pre>eslint</code> 规则</li>
<li><code v-pre>husky</code>: 针对 git 添加钩子函数
<ul>
<li>在<code v-pre>commit-msg</code> 钩子函数内， 通过对 <code v-pre>git commit msg</code> 进行限制，从而达到规范提交信息</li>
<li>在<code v-pre>pre-commit</code> 钩子函数中，通过 <code v-pre>npx lint-staged</code> 对提交的代码进行格式化</li>
</ul>
</li>
</ul>
</div>
<h2 id="cz-config-js-示例" tabindex="-1"><a class="header-anchor" href="#cz-config-js-示例" aria-hidden="true">#</a> cz-config.js 示例</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .cz-config.js</span>
<span class="token comment">// https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"init"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"init:     初始提交"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"feat"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"feat:     新功能"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"add"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"add:      添加依赖"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"fix"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"fix:      修复bug"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"ui"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ui:       更新 UI"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"refactor"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"refactor: 重构(既不是增加feature，也不是修复bug)"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"perf"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"perf:     性能优化"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"docs"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"docs:     文档变更"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"test:     增删测试"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"chore"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"chore:    更改配置文件"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"style"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"style:    样式修改不影响逻辑"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"revert"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"revert:   版本回退"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"release"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"release:  发布"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"deploy"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"deploy:   部署"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认的范围池, 不指定的话, 就可以跳过选择 scopes 这一步了</span>
  <span class="token comment">// scopes: [</span>
  <span class="token comment">// 	{ name: 'components' },</span>
  <span class="token comment">// 	{ name: 'utils' },</span>
  <span class="token comment">// 	{ name: 'styles' },</span>
  <span class="token comment">// 	{ name: 'deps' },</span>
  <span class="token comment">// 	{ name: 'other' }</span>
  <span class="token comment">// ],</span>
  <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许自定义 scope 可以实现 空的 scope</span>
  <span class="token comment">// 重大变化, type === 'feat' || type === 'fix', 才可能需要填写</span>
  <span class="token comment">// 即使启动了, 也是可选的</span>
  <span class="token comment">// allowBreakingChanges: ['feat', 'fix'],</span>
  <span class="token comment">// 消息步骤</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"选择提交类型:"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">"选择修改范围(可选):"</span><span class="token punctuation">,</span>
    <span class="token comment">// 当 allowCustomScopes === true 时, 生效</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">"输入修改范围(可选):"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">"简要描述(必填):"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"详细描述(可选):"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">"重大变化列表 (可选):"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">"要关闭的issue(可选):"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">"确认使用以上信息提交？(y/n/e/h)"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 跳过问题</span>
  <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"body"</span><span class="token punctuation">,</span> <span class="token string">"footer"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// subject 文字长度默认是72</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
