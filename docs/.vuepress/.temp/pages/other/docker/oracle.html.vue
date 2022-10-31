<template><div><h1 id="oracle-甲骨文服务器常用命令" tabindex="-1"><a class="header-anchor" href="#oracle-甲骨文服务器常用命令" aria-hidden="true">#</a> oracle 甲骨文服务器常用命令</h1>
<h2 id="解决-sendnotify-被覆盖问题" tabindex="-1"><a class="header-anchor" href="#解决-sendnotify-被覆盖问题" aria-hidden="true">#</a> 解决 sendNotify 被覆盖问题</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


