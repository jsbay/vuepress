import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.b32e9be8.js";const p={},e=t(`<h2 id="axios-\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#axios-\u62E6\u622A\u5668" aria-hidden="true">#</a> axios \u62E6\u622A\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /src/request.js</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import qs from &#39;qs&#39;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;../router&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// create an axios instance</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// send cookies when cross-domain requests</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// request timeout</span>
  <span class="token literal-property property">axiosConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// request interceptor</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something before request is sent</span>

    <span class="token comment">// eslint-disable-next-line no-param-reassign</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;X-Token&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// eslint-disable-next-line no-param-reassign</span>
    <span class="token comment">// config.data = qs.stringify(config.data);</span>

    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something with request error</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// for debug</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// response interceptor</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/**
   * If you want to get http information such as headers or status
   * Please return  response =&gt; response
   */</span>

  <span class="token doc-comment comment">/**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

    <span class="token comment">// if the custom code is not 0, it is judged as an error.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u914D\u7F6E\u4E86\u81EA\u52A8\u663E\u793A\u9519\u8BEF\u4FE1\u606F</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>axiosConfig<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ElMessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u6C42\u5931\u8D25&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> res<span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">&quot;\u8BF7\u6C42\u63A5\u53E3\u6210\u529F, \u4F46\u662F\u63A5\u53E3\u8FD4\u56DE\u4E86\u4E00\u4E2A\u672A\u77E5\u9519\u8BEF&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">50008</span> <span class="token operator">||</span> res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">50012</span> <span class="token operator">||</span> res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">50014</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// to re-login</span>
          <span class="token function">ElMessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9000\u51FA\u786E\u8BA4&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u5F55\u72B6\u6001\u5931\u6548, \u4F60\u53EF\u4EE5\u70B9\u51FB\u5173\u95ED\u505C\u7559\u5728\u672C\u9875,\u4E5F\u53EF\u4EE5\u91CD\u65B0\u767B\u5F55&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&quot;\u91CD\u65B0\u767B\u5F55&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showCancelButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&quot;\u5173\u95ED&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
              <span class="token comment">// params:</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">err</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// for debug</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>errcode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d*)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> errMsg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errcode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      errMsg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u9519\u8BEF\u72B6\u6001\u7801: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>errcode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      errMsg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u9519\u8BEF\u4FE1\u606F: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      errMsg <span class="token operator">=</span>
        <span class="token string">&quot;\u8BF7\u6C42\u63A5\u53E3\u65F6\u51FA\u73B0\u9519\u8BEF, \u53EF\u80FD\u662F\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898, \u4F60\u53EF\u4EE5\u7A0D\u540E\u91CD\u8BD5\u6216\u8005\u8054\u7CFB\u7CFB\u7EDF\u7EF4\u62A4\u4EBA\u8FDB\u884C\u5904\u7406&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>errMsg<span class="token punctuation">,</span> <span class="token string">&quot;\u8BF7\u6C42\u5931\u8D25&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>

<span class="token comment">// /src/api/xxx.js</span>

<span class="token comment">/* eslint-disable */</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u767B\u5F55
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/api/sso/api/login&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * token \u6821\u9A8C
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">checkToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
    <span class="token string">&quot;/api/sso/api/checkToken&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">axiosConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u83B7\u53D6 \u968F\u673A\u540D\u8A00
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getQuote</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/sso/api/quote&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">axiosConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">max_length</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&quot;k&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4FEE\u6539\u5BC6\u7801
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updatePassword</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/api/sso/api/updatePassword&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","axios.html.vue"]]);export{k as default};
