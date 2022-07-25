import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,b as e}from"./app.2a7543c8.js";const i={},t=e(`<h1 id="vue-2-depoly" tabindex="-1"><a class="header-anchor" href="#vue-2-depoly" aria-hidden="true">#</a> vue 2 depoly</h1><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># nginx.conf</span>

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

		<span class="token comment"># \u8F6C\u53D1 api \u8BF7\u6C42\u81F3 server \u670D\u52A1\u5668 </span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://api.server.host</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		<span class="token comment"># \u8F6C\u53D1 api \u8BF7\u6C42\u81F3 server \u670D\u52A1\u5668 </span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[t];function c(l,o){return s(),a("div",null,p)}var v=n(i,[["render",c],["__file","depoly.html.vue"]]);export{v as default};
