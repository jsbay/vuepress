import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,a as e}from"./app.29fb6705.js";const t={},i=e(`<h1 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h1><h2 id="\u81EA\u5B9A\u4E49\u7684-deploy-sh-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7684-deploy-sh-\u811A\u672C" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7684 <code>deploy.sh</code> \u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">## \u5207\u6362\u5230\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token comment"># cd /Users/baizhanying/\u5DE5\u4F5C/2018.3.19-\u5B89\u56FE/Gitlit/ATMP/SourceCode/FrontendSourceCode</span>

<span class="token comment">## \u6253\u5305</span>
<span class="token function">npm</span> run build:prod

<span class="token comment"># \u8BBE\u7F6E host &amp;&amp; \u8FDC\u7A0B\u76EE\u5F55</span>
<span class="token assign-left variable">remote_host</span><span class="token operator">=</span><span class="token string">&#39;administrator@192.168.49.233&#39;</span>
<span class="token assign-left variable">remote_path</span><span class="token operator">=</span><span class="token string">&#39;C:\\Users\\administrator\\Desktop\\web\\prod&#39;</span>
<span class="token assign-left variable">prod_remote_path</span><span class="token operator">=</span><span class="token string">&#39;C:\\Users\\Administrator\\Desktop\\web\\prod&#39;</span>
<span class="token assign-left variable">dev_remote_path</span><span class="token operator">=</span><span class="token string">&#39;C:\\Users\\Administrator\\Desktop\\web\\dev&#39;</span>

<span class="token comment"># all</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">&#39;all&#39;</span>
<span class="token keyword">then</span>
  <span class="token comment"># prod</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;33m [PROD] \u{1F5D1} \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">&quot;cd <span class="token variable">$prod_remote_path</span> &amp;&amp; rd /s /q css &amp;&amp; rd /s /q fonts &amp;&amp; rd /s /q img &amp;&amp; rd /s /q js&quot;</span>

  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;34m [PROD] \u{1F6E0}\uFE0F \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668... <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$prod_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[0;32m [PROD] \u{1F525} \u53D1\u5E03\u5B8C\u6210 <span class="token entity" title="\\e">\\e</span>[0m&quot;</span>

  <span class="token comment"># dev</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[0;33m [DEV] \u{1F5D1} \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C <span class="token entity" title="\\e">\\e</span>[0m&quot;</span>
  <span class="token comment"># ## \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">&quot;cd <span class="token variable">$dev_remote_path</span> &amp;&amp; rd /s /q static&quot;</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[0;34m [DEV] \u{1F6E0}\uFE0F \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668... <span class="token entity" title="\\e">\\e</span>[0m&quot;</span>
  <span class="token comment"># ## \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$dev_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[0;32m [DEV] \u{1F525} \u53D1\u5E03\u5B8C\u6210 <span class="token entity" title="\\e">\\e</span>[0m&quot;</span>

<span class="token keyword">elif</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">&#39;prod&#39;</span>
<span class="token keyword">then</span>
  <span class="token comment"># prod</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;33m [PROD] \u{1F5D1} \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">&quot;cd <span class="token variable">$prod_remote_path</span> &amp;&amp; rd /s /q css &amp;&amp; rd /s /q fonts &amp;&amp; rd /s /q img &amp;&amp; rd /s /q js&quot;</span>

  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;34m [PROD] \u{1F6E0}\uFE0F \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668... <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$prod_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;32m [PROD] \u{1F525} \u53D1\u5E03\u5B8C\u6210 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>


<span class="token keyword">elif</span> <span class="token builtin class-name">test</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span>
<span class="token keyword">then</span>
  <span class="token comment"># dev</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;33m [DEV] \u{1F5D1} \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76 \u5220\u9664\u4E0A\u6B21\u6253\u5305\u7ED3\u679C</span>
  <span class="token function">ssh</span> <span class="token variable">$remote_host</span> <span class="token string">&quot;cd <span class="token variable">$dev_remote_path</span> &amp;&amp; rd /s /q static&quot;</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;34m [DEV] \u{1F6E0}\uFE0F \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668... <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
  <span class="token comment"># ## \u590D\u5236\u8981\u53D1\u5E03\u7684\u6587\u4EF6\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>
  <span class="token function">scp</span> -r -q ./dist/** <span class="token variable">$remote_host</span>:/<span class="token variable">$dev_remote_path</span>
  <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;32m [DEV] \u{1F525} \u53D1\u5E03\u5B8C\u6210 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u5230-nginx" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5230-nginx" aria-hidden="true">#</a> \u90E8\u7F72\u5230 nginx</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># nginx.conf</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u76D1\u542C\u7684\u7AEF\u53E3\u53F7</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u670D\u52A1\u540D\u79F0 \u751F\u4EA7\u73AF\u5883\u8981\u4FEE\u6539\u6210 \u516C\u7F51ip \u5982 47.105.134.120</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment"># \u914D\u7F6E\u6839\u76EE\u5F55\u7684\u5730\u5740\u662F\u4EE5 nginx \u4E0B\u7684 html \u6587\u4EF6\u5939\u4E3A\u6839\u76EE\u5F55\u6765\u67E5\u627E\u7684</span>
    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>

    <span class="token comment"># \u914D\u7F6E\u9ED8\u8BA4\u7684\u4E3B\u9875\u663E\u793A \u6BD4\u5982 47.105.134.120:8080 \u663E\u793A\u7684 index \u9875\u9762</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># \u914D\u7F6E\u6211\u4EEC\u7684 admin \u7684\u524D\u53F0\u670D\u52A1 \u6BD4\u5982 47.105.134.120:8080/admin/index.html</span>
    <span class="token directive"><span class="token keyword">location</span> ^~ /admin</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u5904\u7406 Vue \u5355\u9875\u9762\u5E94\u7528 \u8DEF\u7531\u6A21\u5F0F\u4E3A history \u6A21\u5F0F\u5237\u65B0\u9875\u9762 404 \u7684\u95EE\u9898</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /admin/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># \u5982\u679C\u4F60\u60F3\u914D\u7F6E\u591A\u4E2A\u9879\u76EE\u7684\u8BDD\uFF0C\u53EF\u4EE5\u590D\u5236\u4E0A\u9762\u7684\uFF0C\u4FEE\u6539\u4E00\u4E0B\u5C31\u53EF\u4EE5\u540C\u65F6\u90E8\u7F72\u591A\u4E2A\u524D\u7AEF\u9879\u76EE\u4E86</span>
    <span class="token comment"># \u6BD4\u5982</span>
    <span class="token comment"># location ^~ /blog {</span>
        <span class="token comment"># \u5904\u7406 Vue \u5355\u9875\u9762\u5E94\u7528 \u8DEF\u7531\u6A21\u5F0F\u4E3A history \u6A21\u5F0F\u5237\u65B0\u9875\u9762 404 \u7684\u95EE\u9898</span>
        <span class="token comment"># try_files $uri $uri/ /blog/index.html;</span>
    <span class="token comment"># }</span>
    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		<span class="token comment"># \u8F6C\u53D1 api \u8BF7\u6C42\u81F3 server \u670D\u52A1\u5668</span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://api.server.host</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		<span class="token comment"># \u8F6C\u53D1 api \u8BF7\u6C42\u81F3 server \u670D\u52A1\u5668</span>
    <span class="token directive"><span class="token keyword">location</span> /websocket/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://ws.server.host</span><span class="token punctuation">;</span>

      <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">360s</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>    <span class="token comment">#\u914D\u7F6E\u8FDE\u63A5\u4E3A\u5347\u7EA7\u8FDE\u63A5</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># \u53BB\u9664 ishsdocument</span>
    <span class="token comment"># http://ip/ishsdocument/abc -&gt; http://ishsfileservice/abc</span>
    <span class="token directive"><span class="token keyword">location</span> ^~/ishsdocument/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://ishsfileservice/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># \u5BFC\u5165 servers \u4E0B\u7684\u6240\u6709\u914D\u7F6E\u6587\u4EF6</span>
  <span class="token directive"><span class="token keyword">include</span> servers/*</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function p(c,o){return n(),a("div",null,l)}var v=s(t,[["render",p],["__file","depoly.html.vue"]]);export{v as default};
