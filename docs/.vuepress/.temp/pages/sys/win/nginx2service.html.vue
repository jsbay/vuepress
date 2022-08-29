<template><div><h1 id="将-nginx-注册为系统服务" tabindex="-1"><a class="header-anchor" href="#将-nginx-注册为系统服务" aria-hidden="true">#</a> 将 nginx 注册为系统服务</h1>
<h2 id="下载-nginx" tabindex="-1"><a class="header-anchor" href="#下载-nginx" aria-hidden="true">#</a> 下载 nginx</h2>
<p>下载地址 <a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">https://nginx.org/en/download.html<ExternalLinkIcon/></a></p>
<p><img src="@source/sys/win/img/nginx-1.jpg" alt="" loading="lazy"></p>
<h2 id="下载-winsw" tabindex="-1"><a class="header-anchor" href="#下载-winsw" aria-hidden="true">#</a> 下载 winsw</h2>
<p>下载地址 <a href="https://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/" target="_blank" rel="noopener noreferrer">https://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/<ExternalLinkIcon/></a></p>
<h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h2>
<p>将 下载的 <code v-pre>nginx.zip</code> 解压<code v-pre>目录 A</code>(自定义)</p>
<h2 id="配置-winsw" tabindex="-1"><a class="header-anchor" href="#配置-winsw" aria-hidden="true">#</a> 配置 winsw</h2>
<ul>
<li>将下载的 <code v-pre>winsw-xxx-bin.exe</code> 复制到 <code v-pre>目录 A</code></li>
<li>将 <code v-pre>winsw-xxx-bin.exe</code> 命名为 <code v-pre>nginx-service.exe</code></li>
<li>新建 <code v-pre>nginx-service.xml</code></li>
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
</div></template>
