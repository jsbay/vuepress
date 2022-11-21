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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>不拉取 重复禁用脚本版</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git <span class="token string">"jd*|jx*|gua*|jddj*|jdCookie"</span> <span class="token string">"activity|backUp|jd_identical"</span> <span class="token string">"^jd[^*]|USER|function|utils|sendNotify|ZooFaker*Necklace.js|JDJRValidator*|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts"</span> <span class="token string">"main"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="faker2" tabindex="-1"><a class="header-anchor" href="#faker2" aria-hidden="true">#</a> faker2</h3>
<blockquote>
<p>助力池版【安全本地 sign 防 CK 泄漏】</p>
<p>faker2 与 faker 3 的区别 <a href="https://www.kejiwanjia.com/circle/31411.html" target="_blank" rel="noopener noreferrer">https://www.kejiwanjia.com/circle/31411.html<ExternalLinkIcon/></a></p>
<p>Faker2 仓库加入助力池，助力池的脚本助力会先行内部助力，助力次数剩余会进行助力池随机助力，可在群内机器人提交自己的互助码。Faker3 仓库去除助力池，为纯内部助力版本。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git <span class="token string">"jd*|jx*|gua*|jddj*|jdCookie"</span> <span class="token string">"activity|backUp"</span> <span class="token string">"^jd[^_]|USER|function|utils|sendNotify|ZooFaker*Necklace.js|JDJRValidator*|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts"</span> <span class="token string">"main"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kingran" tabindex="-1"><a class="header-anchor" href="#kingran" aria-hidden="true">#</a> KingRan</h3>
<blockquote>
<p>这个是一个 活动比较多 的库</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://github.com/KingRan/KR.git <span class="token string">"jd_|jx_|jdCookie"</span> <span class="token string">"activity|backUp"</span> <span class="token string">"^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ccwav" tabindex="-1"><a class="header-anchor" href="#ccwav" aria-hidden="true">#</a> ccwav</h3>
<blockquote>
<p><a href="https://github.com/ccwav/QLScript2" target="_blank" rel="noopener noreferrer">https://github.com/ccwav/QLScript2<ExternalLinkIcon/></a></p>
<p>这个库, 主要是发送通知的脚本, 好多脚本库的 通知脚本都是来源这里</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ql repo https://github.com/ccwav/QLScript2.git <span class="token string">"jd_"</span> <span class="token string">"NoUsed"</span> <span class="token string">"ql|sendNotify|utils|USER_AGENTS|jdCookie|JS_USER_AGENTS"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取单个脚本" tabindex="-1"><a class="header-anchor" href="#拉取单个脚本" aria-hidden="true">#</a> 拉取单个脚本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ql raw "脚本地址"</span>
ql raw <span class="token operator">&lt;</span>fileurl<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决-sendnotify-被覆盖问题" tabindex="-1"><a class="header-anchor" href="#解决-sendnotify-被覆盖问题" aria-hidden="true">#</a> 解决 sendNotify 被覆盖问题</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 4. ql repo拉库逻辑</span>
<span class="token comment"># ql repo 会默认复制 deps 目录下的文件到仓库目录，所以你要固定你的 sendNotify 或者其他文件时，只需要把文件放到deps目录即可</span>

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> qinglong /bin/bash
<span class="token builtin class-name">cd</span> /ql/data/deps/
<span class="token function">wget</span> <span class="token parameter variable">-O</span> sendNotify.js https://raw.githubusercontent.com/ccwav/QLScript2/main/sendNotify.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些常用的命令" tabindex="-1"><a class="header-anchor" href="#一些常用的命令" aria-hidden="true">#</a> 一些常用的命令</h2>
<ul>
<li>进入 docker 容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> qinglong /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-l</span> <span class="token comment"># 查看正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment"># 查看所有容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动所有容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> start <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $1}'</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>关闭所有容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- <span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $1}'</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除所有容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $1}'</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除所有镜像</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> p_w_picpaths <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $3}'</span> <span class="token operator">|</span><span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>重启所有容器</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> restart <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $1}'</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置-jbot-监控活动" tabindex="-1"><a class="header-anchor" href="#设置-jbot-监控活动" aria-hidden="true">#</a> 设置 jbot 监控活动</h2>
<h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一" aria-hidden="true">#</a> 方案一</h3>
<ol>
<li>进入 <code v-pre>http://144.24.86.199:5700/script</code>, 打开 <code v-pre>jk.json</code></li>
<li>修改活动</li>
<li>进入 <code v-pre>http://144.24.86.199:5700/crontab</code>, 执行 <code v-pre>替换 jbot 监控</code></li>
</ol>
<h3 id="方案-二" tabindex="-1"><a class="header-anchor" href="#方案-二" aria-hidden="true">#</a> 方案 二</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> qinglong /bin/bash

<span class="token builtin class-name">cd</span> /ql/data/jbot/conf

<span class="token function">rm</span> jk.json <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> jk.json <span class="token operator">&amp;&amp;</span> <span class="token function">vi</span> jk.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-容器自启动" tabindex="-1"><a class="header-anchor" href="#docker-容器自启动" aria-hidden="true">#</a> docker 容器自启动</h2>
<h3 id="方案-1" tabindex="-1"><a class="header-anchor" href="#方案-1" aria-hidden="true">#</a> 方案 1</h3>
<div class="custom-container info">
<p class="custom-container-title">在创建容器时设置，添加参数 `--restart=always`</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> 设置容器名 使用的镜像
（上面命令  --name后面两个参数根据实际情况自行修改）

<span class="token comment"># Docker 容器的重启策略如下：</span>
 --restart具体参数值详细信息：
       no　　　　　　　 // 默认策略,容器退出时不重启容器；
       on-failure　　  // 在容器非正常退出时（退出状态非0）才重新启动容器；
       on-failure:3    // 在容器非正常退出时重启容器，最多重启3次；
       always　　　　  // 无论退出状态是如何，都重启容器；
       unless-stopped  // 在容器退出时总是重启容器，但是不考虑在 Docker 守护进程启动时就已经停止了的容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案-2" tabindex="-1"><a class="header-anchor" href="#方案-2" aria-hidden="true">#</a> 方案 2</h3>
<div class="custom-container info">
<p class="custom-container-title">使用 `update` 修改已有容器</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器ID<span class="token punctuation">(</span>或者容器名<span class="token punctuation">)</span>
<span class="token comment"># 容器ID或者容器名根据实际情况修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看存储的环境变量" tabindex="-1"><a class="header-anchor" href="#查看存储的环境变量" aria-hidden="true">#</a> 查看存储的环境变量</h2>
<blockquote>
<p>JD_WSCK</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> qinglong /bin/bash
<span class="token function">cat</span> /ql/data/config/env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="甲骨文-服务器-ip-更新" tabindex="-1"><a class="header-anchor" href="#甲骨文-服务器-ip-更新" aria-hidden="true">#</a> 甲骨文 服务器 IP 更新</h2>
<blockquote>
<p>计算--&gt;实例--&gt;实例详细信息--&gt;附加的 VNIC--&gt;VNIC 详细信息--&gt;IP 地址--&gt;编辑--&gt;临时公共 IP--&gt;更新</p>
<p><a href="https://www.dueryou.com/178.html" target="_blank" rel="noopener noreferrer">https://www.dueryou.com/178.html<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="@source/other/hym/ql-panel-1.png" alt="" loading="lazy"></p>
<h2 id="更新-企业微信程序-ip-白名单" tabindex="-1"><a class="header-anchor" href="#更新-企业微信程序-ip-白名单" aria-hidden="true">#</a> 更新 企业微信程序 IP 白名单</h2>
<ol>
<li>打开 <a href="https://work.weixin.qq.com/wework_admin/frame#apps" target="_blank" rel="noopener noreferrer">https://work.weixin.qq.com/wework_admin/frame#apps<ExternalLinkIcon/></a></li>
<li>找到 建立的 机器人程序 点击</li>
</ol>
<p><img src="@source/other/hym/ql-panel-2.jpg" alt="" loading="lazy"></p>
<ol start="3">
<li>下拉到最后, 找到 <code v-pre>企业可信 IP</code>, 点击 <code v-pre>配置</code>, 即可更新</li>
</ol>
</div></template>


