<template><div><h1 id="厉害-这篇正则表达式竟写的如此详尽" tabindex="-1"><a class="header-anchor" href="#厉害-这篇正则表达式竟写的如此详尽" aria-hidden="true">#</a> 厉害！这篇正则表达式竟写的如此详尽</h1>
<p>前言</p>
<h2 id="为什么要学正则表达式" tabindex="-1"><a class="header-anchor" href="#为什么要学正则表达式" aria-hidden="true">#</a> 为什么要学正则表达式？</h2>
<p>作为一个菜鸟程序员，遇到复杂的正则时往往会求助<strong>搜索引擎</strong>。虽然能够解决燃眉之急，但往往会有[边界值] <a href="https://blog.csdn.net/weixin%5C_33994444/article/details/93408973" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin\_33994444/article/details/93408973<ExternalLinkIcon/></a> 和团队正则不统一的问题。而这种问题往往会被细测测出来，造成不必要的麻烦。对于这种情况，最好的解决方式就是去吃透它，最终能将它手写出来。所谓知其然，也要知其所以然。</p>
<p><img src="@source/weixin/img/regex-1.png" alt="" loading="lazy"></p>
<h2 id="什么是正则表达式" tabindex="-1"><a class="header-anchor" href="#什么是正则表达式" aria-hidden="true">#</a> 什么是正则表达式？</h2>
<p>1951 年,一位名叫史蒂芬·克林（Stephen Kleene）的数学科学家，发表了一篇名叫《神经网事件的表示法》的论文。论文中引入了<code v-pre>正则表达式</code>的概念。直至七十多年后的今天，<code v-pre>正则表达式</code>仍然影响着我们互联网生活的方方面面。</p>
<p><img src="@source/weixin/img/regex-2.png" alt="" loading="lazy"></p>
<p>比如需要填入<strong>符合特定规则</strong>的密码、手机号、邮箱等。</p>
<p><img src="@source/weixin/img/regex-3.png" alt="" loading="lazy"></p>
<p>又比如我们需要对输入框加一个中文、英文或价格等<strong>输入限制</strong>。</p>
<p>不过在我们学习正则表达式之前，我们需要先熟悉下它的<strong>调试工具</strong>。</p>
<h2 id="怎么检测我的正则对不对呢" tabindex="-1"><a class="header-anchor" href="#怎么检测我的正则对不对呢" aria-hidden="true">#</a> 怎么检测我的正则对不对呢？</h2>
<h3 id="编辑器内置的搜索工具" tabindex="-1"><a class="header-anchor" href="#编辑器内置的搜索工具" aria-hidden="true">#</a> 编辑器内置的搜索工具</h3>
<p>我们可以使用 Vscode (<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/<ExternalLinkIcon/></a>) 提供的正则的搜索方法，来使用正则匹配我们需要搜索的内容。</p>
<p><img src="@source/weixin/img/regex-4.png" alt="" loading="lazy"></p>
<h3 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h3>
<p>也可以在自己熟悉的编程语言中调用函数去测试。</p>
<p><img src="@source/weixin/img/regex-5.png" alt="" loading="lazy"></p>
<h3 id="在线测试网站" tabindex="-1"><a class="header-anchor" href="#在线测试网站" aria-hidden="true">#</a> 在线测试网站</h3>
<p>亦或是使用我这边推荐的一个[在线测试网站] <a href="https://c.runoob.com/front-end/854/" target="_blank" rel="noopener noreferrer">https://c.runoob.com/front-end/854/<ExternalLinkIcon/></a></p>
<p><img src="@source/weixin/img/regex-6.png" alt="" loading="lazy"></p>
<p>了解了调试工具后我们开始从<strong>基础</strong>学习吧。</p>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<h3 id="限定符-quantifiers" tabindex="-1"><a class="header-anchor" href="#限定符-quantifiers" aria-hidden="true">#</a> 限定符 (Quantifiers)</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> ?</h4>
<p><img src="@source/weixin/img/regex-7.png" alt="" loading="lazy"></p>
<p><code v-pre>?</code> 表示前面的字符可以出现 <strong>1 次或者 0 次</strong>。说简单点就是 &quot;co&quot; 中的 &quot;o&quot; 这个字母可有可无。</p>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> +</h4>
<p><img src="@source/weixin/img/regex-8.png" alt="" loading="lazy"></p>
<p><code v-pre>+</code> 表示前面的字符至少匹配 <strong>1 次或多次</strong>。比如上列中 <code v-pre>poverty</code>、<code v-pre>poor</code> 得到了匹配。<code v-pre>premier</code> 却没有匹配。</p>
<h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> *</h4>
<p><img src="@source/weixin/img/regex-9.png" alt="" loading="lazy"></p>
<p><code v-pre>\*</code>可以匹配 <strong>0 个或者多个字符</strong>。可以看到出现 0 次的 <code v-pre>pr</code> 和 2 次的 <code v-pre>poor</code> 得到了匹配。我们如何匹配<strong>固定次数</strong>或<strong>一定范围</strong>的字符呢？</p>
<h4 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> {...}</h4>
<p><img src="@source/weixin/img/regex-10.png" alt="" loading="lazy"></p>
<p><code v-pre>{...}</code> 可以用来匹配<strong>固定数量</strong>的字符或<strong>某个范围</strong>内的字符。</p>
<p>如上图所示：</p>
<ul>
<li><code v-pre>{2}</code> 当只有一个参数时，只匹配固定数量。</li>
<li><code v-pre>{2,3}</code> 当有两个参数时，匹配范围内的。</li>
<li><code v-pre>{2,}</code> 当后面的参数为空时，匹配 n 个及以上。</li>
</ul>
<h4 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> (...)</h4>
<p>以上都讲的是匹配单个字符，当我们想匹配<strong>多个字符</strong>该怎么办呢？</p>
<p><img src="@source/weixin/img/regex-11.png" alt="" loading="lazy"></p>
<p>我们可以将我们需要匹配的字符用 <code v-pre>(...)</code> 括起来，可以看到 <code v-pre>(...)</code> 搭配我们上文所学的 <code v-pre>+</code> 成功匹配了 <code v-pre>banana</code> 和 <code v-pre>anna</code>。</p>
<h3 id="或运算符-or-operator" tabindex="-1"><a class="header-anchor" href="#或运算符-or-operator" aria-hidden="true">#</a> 或运算符 (OR Operator)</h3>
<p><img src="@source/weixin/img/regex-12.png" alt="" loading="lazy"></p>
<p>当我们需要匹配<strong>两个或多个条件</strong>时我们就需要使用 <code v-pre>|</code> (或运算符)。图中我们匹配了拥有 <code v-pre>an</code> 或 <code v-pre>na</code> 的单词。值得注意的是这里的 <code v-pre>｜</code> 最外层的 <code v-pre>()</code> 是必不可少的。</p>
<h3 id="字符类-character-class" tabindex="-1"><a class="header-anchor" href="#字符类-character-class" aria-hidden="true">#</a> 字符类(Character class)</h3>
<p><img src="@source/weixin/img/regex-13.png" alt="" loading="lazy"></p>
<p>比如我们要匹配<strong>拥有 <code v-pre>123</code> 中任意字符</strong>的字符串则需要使用 <code v-pre>\[...\]</code>, 需要匹配的字符只能取自方括号中的内容。另外我们也可以使用字符类去匹配指定范围，如 [a-z]、[0-9]、[\u4e00-\u9fa5] 等。</p>
<p><img src="@source/weixin/img/regex-14.png" alt="" loading="lazy"></p>
<p>另外我们也可以在前面加 <code v-pre>^</code> 用来匹配<strong>非此范围</strong>的字符串，如上我们就匹配了非英文的字符串。</p>
<p>另外正则表达式也提供了很多<code v-pre>元字符</code>可以让我们简写我们的正则表达式。</p>
<h3 id="元字符-meta-character" tabindex="-1"><a class="header-anchor" href="#元字符-meta-character" aria-hidden="true">#</a> 元字符 (Meta character)</h3>
<p><img src="@source/weixin/img/regex-15.png" alt="" loading="lazy"></p>
<p>我们可以使用 <code v-pre>\\d</code> 代替我们之前的 <code v-pre>\[0-9\]</code>, 这里还有两个特殊字符 <code v-pre>^</code> 会匹配<strong>开始</strong>(这里要注意与我们前面讲到的<code v-pre>字符类</code>中的运用要区分)，<code v-pre>$</code> 会匹配结束。</p>
<blockquote>
<p>`</p>
<ul>
<li>\d,\w,\s - 匹配数字、字符、空格(分别代表着：digit、word、space)。</li>
<li>\D,\W,\S - 匹配非数字、非字符、非空格。</li>
<li>. - 除换行符以外的所有字符(句号句子的结束符)。</li>
<li>^ - 字符串开头。</li>
<li>$ - 字符串结尾。</li>
</ul>
</blockquote>
<p>接下来我们来学习一下正则表达式的<strong>高级概念</strong>。</p>
<h2 id="高级概念" tabindex="-1"><a class="header-anchor" href="#高级概念" aria-hidden="true">#</a> 高级概念</h2>
<h3 id="懒惰匹配和贪婪匹配-lazy-and-greed" tabindex="-1"><a class="header-anchor" href="#懒惰匹配和贪婪匹配-lazy-and-greed" aria-hidden="true">#</a> 懒惰匹配和贪婪匹配 (Lazy and Greed)</h3>
<p>当我们想要匹配文本中的 HTML 时我们会写下如下正则表达式。</p>
<p><img src="@source/weixin/img/regex-16.png" alt="" loading="lazy"></p>
<p>根据前面的知识我们知道，此正则将会匹配&lt;开头&gt;结尾中间可以有至少 1 个任意字符。但结果是匹配了<code v-pre>&lt;</code>和<code v-pre>&gt;</code> 标签包含的所有内容。</p>
<p><img src="@source/weixin/img/regex-17.png" alt="" loading="lazy"></p>
<p>我们可以在正则表达式中加<code v-pre>?</code>来开启<code v-pre>懒惰匹配</code>。开启懒惰匹配后，正则会<strong>尽可能少的匹配</strong>。所以当匹配的时候发现标签 <code v-pre>&lt;div&gt;</code> 已经是符合要求的，所以会匹配 <code v-pre>&lt;div&gt;</code> 标签，然后继续向下匹配，发现 <code v-pre>&lt;/div&gt;</code> 标签也是符合要求的，继续向下匹配，发现文字不符合要求，继续向下，发现 <code v-pre>&lt;span&gt;</code> 和 <code v-pre>&lt;/span&gt;</code> 标签都是符合要求的，所以最后会匹配 <code v-pre>&lt;div&gt;</code>, <code v-pre>&lt;/div&gt;</code>, <code v-pre>&lt;span&gt;</code>, <code v-pre>&lt;/span&gt;</code> 四个标签。</p>
<h3 id="分组-group" tabindex="-1"><a class="header-anchor" href="#分组-group" aria-hidden="true">#</a> 分组 (Group)</h3>
<p>前面我们认识了 <code v-pre>(...)</code> 的用法，将其结合我们后面所学的知识就是正则的<code v-pre>分组</code>。</p>
<p><img src="@source/weixin/img/regex-18.png" alt="" loading="lazy"></p>
<p>如上图所示第一个分组中我们匹配 4 个数字，第二个分组中我们匹配 7 个数字。中间使用 <code v-pre>-</code> 进行连接，便很容易匹配到了文本中出现的座机电话号。</p>
<h3 id="非捕获分组-non-capture-group" tabindex="-1"><a class="header-anchor" href="#非捕获分组-non-capture-group" aria-hidden="true">#</a> 非捕获分组 (Non-capture Group)</h3>
<p>非捕获分组：<code v-pre>(?:表达式)</code>，分组匹配之后，不需要的用 <code v-pre>?: </code>语法过滤子表达式内容。也就是代码匹配，但是不保存。</p>
<p>在使用非捕获前:</p>
<p><img src="@source/weixin/img/regex-19.png" alt="" loading="lazy"></p>
<p>在使用非捕获后:</p>
<p><img src="@source/weixin/img/regex-20.png" alt="" loading="lazy"></p>
<p>通过 <code v-pre>.exec</code> 方法并没有捕获到月份。</p>
<h3 id="回溯-flash-back" tabindex="-1"><a class="header-anchor" href="#回溯-flash-back" aria-hidden="true">#</a> 回溯 (Flash Back)</h3>
<p>当我们想匹配一个正确的 HTML 标签时，使用 &quot;&lt;[\w]+&gt;.*&lt;\/[\w]+&gt;&quot;。</p>
<p><img src="@source/weixin/img/regex-21.png" alt="" loading="lazy"></p>
<p>可以看到虽然可以匹配 HTML 开始和结束标签，但是<strong>却不能校验前后的一致性</strong>。如 <code v-pre>&lt;/span&gt;</code> 并不是 <code v-pre>&lt;div&gt;</code> 的结束标签。</p>
<p><img src="@source/weixin/img/regex-22.png" alt="" loading="lazy"></p>
<p>我们可以把后面的部分改成 <code v-pre>&lt;\\/\\1&gt;</code> 其中 <code v-pre>\\1</code> 就是引用第一个<code v-pre>分组</code>。这样一来我们就可以匹配正确的 HTML 标签了。</p>
<h3 id="断言-assertion" tabindex="-1"><a class="header-anchor" href="#断言-assertion" aria-hidden="true">#</a> 断言 (Assertion)</h3>
<p><strong>断言</strong>有些地方也叫环视(Lookaround)，它只进行子表达式的匹配，不占有字符，匹配到的内容不保存到最终的匹配结果。</p>
<h4 id="正向先行断言" tabindex="-1"><a class="header-anchor" href="#正向先行断言" aria-hidden="true">#</a> 正向先行断言</h4>
<p>正向先行断言：<code v-pre>(?=表达式)</code>，指在某个位置往右看，所在的位置右侧必须匹配<code v-pre>表达式</code>。</p>
<p><img src="@source/weixin/img/regex-23.png" alt="" loading="lazy"></p>
<p>我们可以看到<code v-pre>/喜欢(?=你)</code>正确匹配到了<code v-pre>你</code>前面有<code v-pre>喜欢</code>的文本。</p>
<h5 id="实现一个密码强度校验" tabindex="-1"><a class="header-anchor" href="#实现一个密码强度校验" aria-hidden="true">#</a> 实现一个密码强度校验</h5>
<blockquote>
<p>`</p>
<p>至少有一个大写字母。至少有一个小写字母。至少有一个数字。至少有 8 个字符。</p>
</blockquote>
<p><img src="@source/weixin/img/regex-24.png" alt="" loading="lazy"></p>
<h4 id="反向先行断言" tabindex="-1"><a class="header-anchor" href="#反向先行断言" aria-hidden="true">#</a> 反向先行断言</h4>
<p>反向先行断言：<code v-pre>(?!表达式)</code>，指在某个位置往右看，不能存在<code v-pre>表达式</code>中的内容。</p>
<p><img src="@source/weixin/img/regex-25.png" alt="" loading="lazy"></p>
<p>如上就排除了<code v-pre>喜欢</code>后面有<code v-pre>你</code>的字符串。</p>
<h4 id="正向后行断言" tabindex="-1"><a class="header-anchor" href="#正向后行断言" aria-hidden="true">#</a> 正向后行断言</h4>
<p>正向后行断言：<code v-pre>(?&lt;=表达式)</code>，指在某个位置往左看，存在<code v-pre>表达式</code>中的内容。</p>
<p><img src="@source/weixin/img/regex-26.png" alt="" loading="lazy"></p>
<p>如上就匹配了<code v-pre>喜欢</code>前面有<code v-pre>我</code>的字符串。</p>
<h4 id="反向后行断言" tabindex="-1"><a class="header-anchor" href="#反向后行断言" aria-hidden="true">#</a> 反向后行断言</h4>
<p>反向后行断言：<code v-pre>(?&lt;!表达式)</code>，指在某个位置往左看，不能存在<code v-pre>表达式</code>中的内容。</p>
<p><img src="@source/weixin/img/regex-27.png" alt="" loading="lazy"></p>
<p>如上就排除了<code v-pre>喜欢</code>前面有<code v-pre>我</code>的字符串。</p>
<p>至此正则表达式的<strong>高级部分</strong>学完啦，接下来我们学习正则提供的<strong>方法</strong>。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p>在 JavaScript 中，<code v-pre>RegExp</code> 对象是一个预定义了属性和方法的正则表达式对象。</p>
<h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test()</h3>
<p><img src="@source/weixin/img/regex-28.png" alt="" loading="lazy"></p>
<p>该方法用于检测一个字符串是否匹配某个正则表达式，<strong>匹配</strong>返回 true，<strong>不匹配</strong>返回 false。</p>
<h3 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> exec()</h3>
<p><img src="@source/weixin/img/regex-29.png" alt="" loading="lazy"></p>
<p>该方法用于检测字符串中对正则表达式的匹配。</p>
<p>该函数返回一个<strong>数组</strong>，其中存放匹配的结果。如果未找到匹配，则返回值为 null。</p>
<p>除了正则自身携带的方法，配合 <strong>String 对象</strong>的方法一起使用也会有额外的效果。</p>
<h2 id="配合-string-提供的方法" tabindex="-1"><a class="header-anchor" href="#配合-string-提供的方法" aria-hidden="true">#</a> 配合 String 提供的方法</h2>
<h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3>
<p>match 这个方法主要用来提取数据，它配合分组的（）一起使用，可以很方便提取数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"2022-04-22"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\d{4})-(\d{2})-(\d{2})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  ['2022-04-22', '2022', '04', '22', index: 0, input: '2022-04-22', groups: undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h3>
<p>replace 这个 api 主要用于替换数据，多用于字符串的处理和转义。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"贾维斯：您今天共产生了8个BUG"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\w{3}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">"Beautiful Code"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 贾维斯：您今天共产生了8个Beautiful Code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="什么是-1-2" tabindex="-1"><a class="header-anchor" href="#什么是-1-2" aria-hidden="true">#</a> 什么是 $ 1 $ 2</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"前端1组-开发部"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.{4})-(.{3})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">"$2 $1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 开发部 前端 1 组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>$1</strong>,<strong>$2</strong> 上就是按顺序对应小括号里面的<strong>分组</strong> 捕获到的内容。这里我们将 2 组和 1 组进行内容替换，就得到了替换后的内容。</p>
<h3 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h3>
<p><strong>split</strong> 主要用于来切分字符串为数组，它的第一个参数也可以为正则的形式。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">"2022-04-21"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"2022.04.22"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">"2022/04/23"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> regsSplit <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\.\-\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>regsSplit<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>regsSplit<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>regsSplit<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['2022', '04', '21']   // ['2022', '04', '22']   // ['2022', '04', '23']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解完了，结合 String 用法，我们再来了解一下<strong>兼容性问题</strong>。</p>
<h2 id="正则表达式兼容性调研" tabindex="-1"><a class="header-anchor" href="#正则表达式兼容性调研" aria-hidden="true">#</a> 正则表达式兼容性调研</h2>
<p>在我们日常使用中，一定会遇到兼容性问题。这里主要对一些不完全兼容的方法进行调研。</p>
<h3 id="split-1" tabindex="-1"><a class="header-anchor" href="#split-1" aria-hidden="true">#</a> @@split</h3>
<p><code v-pre>@@split</code> 方法切割 String 对象为一个其子字符串的数组 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"2022-01-02"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> re<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>split<span class="token punctuation">]</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["2022", "01", "02"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-30.png" alt="" loading="lazy"></p>
<h3 id="match-1" tabindex="-1"><a class="header-anchor" href="#match-1" aria-hidden="true">#</a> @@match</h3>
<p>对正则表达式匹配字符串时，<code v-pre>@@match</code> 方法用于获取匹配结果。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[0-9]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"2022-01-02"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> re<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>match<span class="token punctuation">]</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["2022", "01", "02"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-31.png" alt="" loading="lazy"></p>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> @@search</h3>
<p><code v-pre>@@search</code> 方法执行了一个在给定字符串中的一个搜索以取得匹配正则模式的项。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"2016-01-02"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> re<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>search<span class="token punctuation">]</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-32.png" alt="" loading="lazy"></p>
<h3 id="replace-1" tabindex="-1"><a class="header-anchor" href="#replace-1" aria-hidden="true">#</a> @@replace</h3>
<p><code v-pre>@@replace</code> 方法会在一个字符串中用给定的替换器，替换所有符合正则模式的匹配项，并返回替换后的新字符串结果。用来替换的参数可以是一个字符串或是一个针对每次匹配的回调函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"2016-01-01"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newstr <span class="token operator">=</span> re<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>replace<span class="token punctuation">]</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newstr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2016.01.01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-33.png" alt="" loading="lazy"></p>
<h3 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> flags</h3>
<p><code v-pre>flags</code> 属性返回一个字符串，由当前正则表达式对象的标志组成。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span>flags<span class="token punctuation">;</span> <span class="token comment">// "gi"</span>
<span class="token operator">/</span>bar<span class="token operator">/</span>muy<span class="token punctuation">.</span>flags<span class="token punctuation">;</span> <span class="token comment">// "muy"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-34.png" alt="" loading="lazy"></p>
<h3 id="dotall" tabindex="-1"><a class="header-anchor" href="#dotall" aria-hidden="true">#</a> dotAll</h3>
<p>正则中的点匹配就是 <code v-pre>dotAll</code> ，都是匹配任意字符，但是很多字符是无法匹配的。例如：</p>
<ul>
<li>四个字节的 <code v-pre>UTF-16</code> 的字符</li>
<li>行终止符 <code v-pre>\n</code> <code v-pre>\r</code> 换行 回车</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo.bar</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"foo\nbar"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo.bar</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"fooabar"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>加上 <code v-pre>s</code> 可以匹配换行符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo.bar</span><span class="token regex-delimiter">/</span><span class="token regex-flags">s</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"foo\nbar"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>兼容性</p>
<p><img src="@source/weixin/img/regex-35.png" alt="" loading="lazy"></p>
<p>最后我们让来点<strong>干货</strong>吧</p>
<h2 id="干货" tabindex="-1"><a class="header-anchor" href="#干货" aria-hidden="true">#</a> 干货</h2>
<h3 id="保留两位小数的价格输入框" tabindex="-1"><a class="header-anchor" href="#保留两位小数的价格输入框" aria-hidden="true">#</a> 保留两位小数的价格输入框</h3>
<p>具体代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入限制   å</span>
<span class="token keyword">const</span> <span class="token function-variable function">changePiece</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\D*(\d*(?:\.\d{0,2})?).*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"$1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>input
      type<span class="token operator">=</span><span class="token string">"text"</span>
      onKeyUp<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">changePiece</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用正则表达式" tabindex="-1"><a class="header-anchor" href="#常用正则表达式" aria-hidden="true">#</a> 常用正则表达式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 手机号码的校验</span>
<span class="token keyword">const</span> phoneReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1][3,4,5,6,7,8,9][0-9]{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 身份证的校验</span>
<span class="token keyword">const</span> idCardReg <span class="token operator">=</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// URL的校验</span>
<span class="token keyword">const</span> urlReg <span class="token operator">=</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 邮箱的校验</span>
<span class="token keyword">const</span> emailReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 日期 YYYY-MM-DD 校验</span>
<span class="token keyword">const</span> dateReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d{4}(\-)\d{1,2}\1\d{1,2}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>
<p>《Can I Use——正则表达式》(<a href="https://caniuse.com/?search=RegExp" target="_blank" rel="noopener noreferrer">https://caniuse.com/?search=RegExp<ExternalLinkIcon/></a>)</p>
<p>《有了这 25 个正则表达式，代码效率提高 80%》(<a href="https://juejin.cn/post/7016871226899431431" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7016871226899431431<ExternalLinkIcon/></a>)</p>
<p>《10 分钟快速掌握正则表达式》 (<a href="https://www.bilibili.com/video/BV1da4y1p7iZ?spm%5C_id%5C_from=333.337.search-card.all.click" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1da4y1p7iZ?spm\_id\_from=333.337.search-card.all.click<ExternalLinkIcon/></a></p>
<p>本文转自 <a href="https://mp.weixin.qq.com/s/OqTSmltRGp12mRTEfjVuyg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/OqTSmltRGp12mRTEfjVuyg<ExternalLinkIcon/></a>，如有侵权，请联系删除。</p>
</div></template>


