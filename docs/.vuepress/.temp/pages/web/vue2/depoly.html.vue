<template><div><h1 id="vue2-部署" tabindex="-1"><a class="header-anchor" href="#vue2-部署" aria-hidden="true">#</a> vue2 部署</h1>
<h2 id="自定义的-deploy-sh-脚本" tabindex="-1"><a class="header-anchor" href="#自定义的-deploy-sh-脚本" aria-hidden="true">#</a> 自定义的 <code v-pre>deploy.sh</code> 脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">## 切换到工作目录</span>
<span class="token comment"># cd /Users/baizhanying/工作/2018.3.19-安图/Gitlit/ATMP/SourceCode/FrontendSourceCode</span>

<span class="token comment">## 打包</span>
<span class="token function">npm</span> run build:prod

<span class="token comment"># 设置 host &amp;&amp; 远程目录</span>
<span class="token assign-left variable">remote_host</span><span class="token operator">=</span><span class="token string">'administrator@192.168.49.233'</span>
<span class="token assign-left variable">remote_path</span><span class="token operator">=</span><span class="token string">'C:\Users\administrator\Desktop\web\prod'</span>
<span class="token assign-left variable">prod_remote_path</span><span class="token operator">=</span><span class="token string">'C:\Users\Administrator\Desktop\web\prod'</span>
<span class="token assign-left variable">dev_remote_path</span><span class="token operator">=</span><span class="token string">'C:\Users\Administrator\Desktop\web\dev'</span>

<span class="token comment"># all</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">'all'</span>
<span class="token keyword">then</span>
  <span class="token comment"># prod</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;33m [PROD] 🗑 登陆远程服务器并 删除上次打包结果 <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 登陆远程服务器并 删除上次打包结果</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">"cd <span class="token variable">$prod_remote_path</span> &amp;&amp; rd /s /q css &amp;&amp; rd /s /q fonts &amp;&amp; rd /s /q img &amp;&amp; rd /s /q js"</span>

  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;34m [PROD] 🛠️ 复制要发布的文件到远程服务器... <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 复制要发布的文件到远程服务器</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$prod_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\e">\e</span>[0;32m [PROD] 🔥 发布完成 <span class="token entity" title="\e">\e</span>[0m"</span>

  <span class="token comment"># dev</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\e">\e</span>[0;33m [DEV] 🗑 登陆远程服务器并 删除上次打包结果 <span class="token entity" title="\e">\e</span>[0m"</span>
  <span class="token comment"># ## 登陆远程服务器并 删除上次打包结果</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">"cd <span class="token variable">$dev_remote_path</span> &amp;&amp; rd /s /q static"</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\e">\e</span>[0;34m [DEV] 🛠️ 复制要发布的文件到远程服务器... <span class="token entity" title="\e">\e</span>[0m"</span>
  <span class="token comment"># ## 复制要发布的文件到远程服务器</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$dev_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\e">\e</span>[0;32m [DEV] 🔥 发布完成 <span class="token entity" title="\e">\e</span>[0m"</span>

<span class="token keyword">elif</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">'prod'</span>
<span class="token keyword">then</span>
  <span class="token comment"># prod</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;33m [PROD] 🗑 登陆远程服务器并 删除上次打包结果 <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 登陆远程服务器并 删除上次打包结果</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">"cd <span class="token variable">$prod_remote_path</span> &amp;&amp; rd /s /q css &amp;&amp; rd /s /q fonts &amp;&amp; rd /s /q img &amp;&amp; rd /s /q js"</span>

  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;34m [PROD] 🛠️ 复制要发布的文件到远程服务器... <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 复制要发布的文件到远程服务器</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$prod_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;32m [PROD] 🔥 发布完成 <span class="token entity" title="\033">\033</span>[0m"</span>


<span class="token keyword">elif</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">'dev'</span>
<span class="token keyword">then</span>
  <span class="token comment"># dev</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;33m [DEV] 🗑 登陆远程服务器并 删除上次打包结果 <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 登陆远程服务器并 删除上次打包结果</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">"cd <span class="token variable">$dev_remote_path</span> &amp;&amp; rd /s /q static"</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;34m [DEV] 🛠️ 复制要发布的文件到远程服务器... <span class="token entity" title="\033">\033</span>[0m"</span>
  <span class="token comment"># ## 复制要发布的文件到远程服务器</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$dev_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[0;32m [DEV] 🔥 发布完成 <span class="token entity" title="\033">\033</span>[0m"</span>

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署到-nginx" tabindex="-1"><a class="header-anchor" href="#部署到-nginx" aria-hidden="true">#</a> 部署到 nginx</h2>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token comment"># nginx.conf</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 监听的端口号</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 服务名称 生产环境要修改成 公网ip 如 47.105.134.120</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment"># 配置根目录的地址是以 nginx 下的 html 文件夹为根目录来查找的</span>
    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>

    <span class="token comment"># 配置默认的主页显示 比如 47.105.134.120:8080 显示的 index 页面</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 配置我们的 admin 的前台服务 比如 47.105.134.120:8080/admin/index.html</span>
    <span class="token directive"><span class="token keyword">location</span> ^~ /admin</span> <span class="token punctuation">{</span>
        <span class="token comment"># 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /admin/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 如果你想配置多个项目的话，可以复制上面的，修改一下就可以同时部署多个前端项目了</span>
    <span class="token comment"># 比如</span>
    <span class="token comment"># location ^~ /blog {</span>
        <span class="token comment"># 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题</span>
        <span class="token comment"># try_files $uri $uri/ /blog/index.html;</span>
    <span class="token comment"># }</span>
    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		<span class="token comment"># 转发 api 请求至 server 服务器</span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://api.server.host</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		<span class="token comment"># 转发 api 请求至 server 服务器</span>
    <span class="token directive"><span class="token keyword">location</span> /websocket/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://ws.server.host</span><span class="token punctuation">;</span>

      <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">360s</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">"upgrade"</span></span><span class="token punctuation">;</span>    <span class="token comment">#配置连接为升级连接</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 去除 ishsdocument</span>
    <span class="token comment"># http://ip/ishsdocument/abc -> http://ishsfileservice/abc</span>
    <span class="token directive"><span class="token keyword">location</span> ^~/ishsdocument/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://ishsfileservice/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 导入 servers 下的所有配置文件</span>
  <span class="token directive"><span class="token keyword">include</span> servers/*</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
