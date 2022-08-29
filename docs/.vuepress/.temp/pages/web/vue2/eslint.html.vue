<template><div><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h1>
<h2 id="常用的-eslint-规则" tabindex="-1"><a class="header-anchor" href="#常用的-eslint-规则" aria-hidden="true">#</a> 常用的 eslint 规则</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// 0 - off; 1 - warning; 2 - error</span>
<span class="token punctuation">{</span>
	<span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// tempalte 缩进校验 https://eslint.vuejs.org/rules/html-indent.html</span>
		<span class="token property">"vue/html-indent"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> baseIndent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> closeBracket<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> alignAttributesVertically<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> ignores<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// html 中的{{}} 两边必须有空格  https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html</span>
		<span class="token property">"vue/mustache-interpolation-spacing"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"always"</span> | <span class="token string">"never"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 单行属性最多 https://eslint.vuejs.org/rules/max-attributes-per-line.html</span>
		<span class="token property">"vue/max-attributes-per-line"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> singleline<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> multiline<span class="token operator">:</span> <span class="token punctuation">{</span> max<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> allowFirstLine<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 属性排序 https://eslint.vuejs.org/rules/attributes-order.html</span>
		<span class="token property">"vue/attributes-order"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"DEFINITION"</span><span class="token punctuation">,</span> <span class="token string">"LIST_RENDERING"</span><span class="token punctuation">,</span> <span class="token string">"CONDITIONALS"</span><span class="token punctuation">,</span> <span class="token string">"RENDER_MODIFIERS"</span><span class="token punctuation">,</span> <span class="token string">"GLOBAL"</span><span class="token punctuation">,</span> <span class="token string">"UNIQUE"</span><span class="token punctuation">,</span> <span class="token string">"TWO_WAY_BINDING"</span><span class="token punctuation">,</span> <span class="token string">"OTHER_DIRECTIVES"</span><span class="token punctuation">,</span> <span class="token string">"OTHER_ATTR"</span><span class="token punctuation">,</span> <span class="token string">"EVENTS"</span><span class="token punctuation">,</span> <span class="token string">"CONTENT"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> alphabetical<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 组件名命名规则 https://eslint.vuejs.org/rules/component-definition-name-casing.html</span>
		<span class="token property">"vue/component-definition-name-casing"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"PascalCase"</span> | <span class="token string">"kebab-case"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// export default {</span>
    <span class="token comment">//   &lt;!-- ✗ BAD --></span>
    <span class="token comment">//   name: 'my-component'</span>
    <span class="token comment">// }</span>

    <span class="token comment">// 组件在 template 的使用 https://eslint.vuejs.org/rules/component-name-in-template-casing.html</span>
		<span class="token property">"vue/component-name-in-template-casing"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"PascalCase"</span> | <span class="token string">"kebab-case"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"registeredComponentsOnly"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">"ignores"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;template></span>
    <span class="token comment">//   &lt;!-- ✓ GOOD --></span>
    <span class="token comment">//   &lt;CoolComponent /></span>
    <span class="token comment">//   &lt;!-- ✗ BAD --></span>
    <span class="token comment">//   &lt;cool-component /></span>
    <span class="token comment">//   &lt;coolComponent /></span>
    <span class="token comment">//   &lt;Cool-component /></span>
    <span class="token comment">// &lt;/template></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint-一键修复" tabindex="-1"><a class="header-anchor" href="#eslint-一键修复" aria-hidden="true">#</a> eslint 一键修复</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 一键修复 src 下 js/vue 文件的格式错误</span>
npx eslint --ext .js,.vue src --fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">参数说明</p>
<p>eslint [options] file.js [file.js] [dir]</p>
<p>Basic configuration:</p>
<ul>
<li>--no-eslintrc Disable use of configuration from .eslintrc._</li>
<li>-c, --config path::String Use this configuration, overriding .eslintrc._ config options if present</li>
<li>--env [String] Specify environments</li>
<li>--ext [String] Specify JavaScript file extensions - default: .js</li>
<li>--global [String] Define global variables</li>
<li>--parser String Specify the parser to be used</li>
<li>--parser-options Object Specify parser options</li>
<li>--resolve-plugins-relative-to path::String A folder where plugins should be resolved from, CWD by default</li>
</ul>
<p>Specifying rules and plugins:</p>
<ul>
<li>--rulesdir [path::String] Use additional rules from this directory</li>
<li>--plugin [String] Specify plugins</li>
<li>--rule Object Specify rules</li>
</ul>
<p>Fixing problems:</p>
<ul>
<li>--fix Automatically fix problems</li>
<li>--fix-dry-run Automatically fix problems without saving the changes to the file system</li>
<li>--fix-type Array Specify the types of fixes to apply (problem, suggestion, layout)</li>
</ul>
<p>Ignoring files:</p>
<ul>
<li>--ignore-path path::String Specify path of ignore file</li>
<li>--no-ignore Disable use of ignore files and patterns</li>
<li>--ignore-pattern [String] Pattern of files to ignore (in addition to those in .eslintignore)</li>
</ul>
<p>Using stdin:</p>
<ul>
<li>--stdin Lint code provided on &lt;STDIN&gt; - default: false</li>
<li>--stdin-filename String Specify filename to process STDIN as</li>
</ul>
<p>Handling warnings:</p>
<ul>
<li>--quiet Report errors only - default: false</li>
<li>--max-warnings Int Number of warnings to trigger nonzero exit code - default: -1</li>
</ul>
<p>Output:</p>
<ul>
<li>-o, --output-file path::String Specify file to write report to</li>
<li>-f, --format String Use a specific output format - default: stylish</li>
<li>--color, --no-color Force enabling/disabling of color</li>
</ul>
<p>Inline configuration comments:</p>
<ul>
<li>--no-inline-config Prevent comments from changing config or rules</li>
<li>--report-unused-disable-directives Adds reported errors for unused eslint-disable directives</li>
</ul>
<p>Caching:</p>
<ul>
<li>--cache Only check changed files - default: false</li>
<li>--cache-file path::String Path to the cache file. Deprecated: use --cache-location - default: .eslintcache</li>
<li>--cache-location path::String Path to the cache file or directory</li>
</ul>
<p>Miscellaneous:</p>
<ul>
<li>--init Run config initialization wizard - default: false</li>
<li>--env-info Output execution environment information - default: false</li>
<li>--debug Output debugging information</li>
<li>-h, --help Show help</li>
<li>-v, --version Output the version number</li>
<li>--print-config path::String Print the configuration for the given file</li>
</ul>
</div>
</div></template>
