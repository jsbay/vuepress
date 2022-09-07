<template><div><h1 id="将-nginx-注册为系统服务" tabindex="-1"><a class="header-anchor" href="#将-nginx-注册为系统服务" aria-hidden="true">#</a> 将 nginx 注册为系统服务</h1>
<h2 id="nginx-下载及安装" tabindex="-1"><a class="header-anchor" href="#nginx-下载及安装" aria-hidden="true">#</a> nginx 下载及安装</h2>
<ol>
<li>下载地址 <a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">https://nginx.org/en/download.html<ExternalLinkIcon/></a></li>
</ol>
<p><img src="@source/sys/win/img/nginx-1.jpg" alt="" loading="lazy"></p>
<ol start="2">
<li>将 下载的 <code v-pre>nginx.zip</code> 解压<code v-pre>目录 A</code>(自定义)</li>
</ol>
<h2 id="winsw-下载及配置" tabindex="-1"><a class="header-anchor" href="#winsw-下载及配置" aria-hidden="true">#</a> winsw 下载及配置</h2>
<ol>
<li>下载地址 <a href="https://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/" target="_blank" rel="noopener noreferrer">https://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/<ExternalLinkIcon/></a></li>
</ol>
<ul>
<li>将下载的 <code v-pre>winsw-xxx-bin.exe</code>, 命名为 <code v-pre>nginx-service.exe</code>, 并复制到 <code v-pre>目录 A</code></li>
<li><code v-pre>目录 A</code> 新建 <code v-pre>nginx-service.xml</code></li>
</ul>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>service</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nginx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>nginx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>nginx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>env</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>目录 A<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executable</span><span class="token punctuation">></span></span>目录 A/nginx.exe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executable</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arguments</span><span class="token punctuation">></span></span>-p 目录 A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>arguments</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logpath</span><span class="token punctuation">></span></span>目录 A/logs/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logpath</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logmode</span><span class="token punctuation">></span></span>roll<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logmode</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>service</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>管理员运行 <code v-pre>cmd</code>, 进入 <code v-pre>目录 A</code>,执行 <code v-pre>nginx-service.exe install</code></p>
<ul>
<li>卸载服务 执行 <code v-pre>nginx-service.exe uninstall</code></li>
</ul>
</li>
<li>
<p><code v-pre>win+r</code> 输入 <code v-pre>services.msc</code> 打开服务窗口, 启动 <code v-pre>nginx</code></p>
</li>
</ul>
<h2 id="部署脚本" tabindex="-1"><a class="header-anchor" href="#部署脚本" aria-hidden="true">#</a> 部署脚本</h2>
<div class="custom-container info">
<p class="custom-container-title">部署脚本</p>
<p><RouterLink to="/web/vue2/depoly.html#%E9%83%A8%E7%BD%B2%E5%88%B0-nginx">地址</RouterLink></p>
</div>
</div></template>


