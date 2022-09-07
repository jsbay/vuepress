<template><div><h1 id="excel-方案" tabindex="-1"><a class="header-anchor" href="#excel-方案" aria-hidden="true">#</a> Excel 方案</h1>
<h2 id="通过-exceljs-实现纯前端复杂-excel-导出" tabindex="-1"><a class="header-anchor" href="#通过-exceljs-实现纯前端复杂-excel-导出" aria-hidden="true">#</a> 通过 ExcelJS 实现纯前端复杂 excel 导出</h2>
<p><a href="https://github.com/exceljs/exceljs/blob/master/README_zh.md" target="_blank" rel="noopener noreferrer">文档地址<ExternalLinkIcon/></a></p>
<div class="custom-container info">
<p class="custom-container-title">安装</p>
<CodeTabs :data='[{"title":"yarn"},{"title":"npm"}]' :active="0" tab-id="bash">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> exceljs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> exceljs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
</div>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>结果:</p>
<p><img src="/vue2-excel-1.png" alt="vue2-excel-1" loading="lazy"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// download-excel.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"file-saver"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">saveWorkbook</span><span class="token punctuation">(</span><span class="token parameter">workbook<span class="token punctuation">,</span> fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 导出文件</span>
  workbook<span class="token punctuation">.</span>xlsx<span class="token punctuation">.</span><span class="token function">writeBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 业务代码</span>

<span class="token comment">// 创建工作簿</span>
<span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExcelJS<span class="token punctuation">.</span>Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建带有红色标签颜色的工作表</span>
<span class="token keyword">const</span> sheet1 <span class="token operator">=</span> workbook<span class="token punctuation">.</span><span class="token function">addWorksheet</span><span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">views</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">"frozen"</span><span class="token punctuation">,</span> <span class="token literal-property property">xSplit</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">ySplit</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 表头</span>
<span class="token keyword">const</span> headerRows <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">"菌株名称"</span><span class="token punctuation">,</span>
    <span class="token string">"样本序号"</span><span class="token punctuation">,</span>
    <span class="token string">"样本类型"</span><span class="token punctuation">,</span>
    <span class="token string">"菌株编号"</span><span class="token punctuation">,</span>
    <span class="token string">"批号"</span><span class="token punctuation">,</span>
    <span class="token string">"来源地"</span><span class="token punctuation">,</span>
    <span class="token string">"入库状态"</span><span class="token punctuation">,</span>
    <span class="token string">"抗生素"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token string">"菌株名称"</span><span class="token punctuation">,</span>
    <span class="token string">"样本序号"</span><span class="token punctuation">,</span>
    <span class="token string">"样本类型"</span><span class="token punctuation">,</span>
    <span class="token string">"菌株编号"</span><span class="token punctuation">,</span>
    <span class="token string">"批号"</span><span class="token punctuation">,</span>
    <span class="token string">"来源地"</span><span class="token punctuation">,</span>
    <span class="token string">"入库状态"</span><span class="token punctuation">,</span>
    <span class="token string">"抗生素"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token string">"菌株名称"</span><span class="token punctuation">,</span>
    <span class="token string">"样本序号"</span><span class="token punctuation">,</span>
    <span class="token string">"样本类型"</span><span class="token punctuation">,</span>
    <span class="token string">"菌株编号"</span><span class="token punctuation">,</span>
    <span class="token string">"批号"</span><span class="token punctuation">,</span>
    <span class="token string">"来源地"</span><span class="token punctuation">,</span>
    <span class="token string">"入库状态"</span><span class="token punctuation">,</span>
    <span class="token string">"抗生素"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 添加表头</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> methodologies <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validMethodologies<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> methodologyName <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> experimentDate <span class="token operator">=</span> <span class="token string">""</span> <span class="token punctuation">}</span> <span class="token operator">=</span> methodologies<span class="token punctuation">;</span>
  headerRows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>methodologyName<span class="token punctuation">,</span> methodologyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  headerRows<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>experimentDate<span class="token punctuation">,</span> experimentDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  headerRows<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"MIC"</span><span class="token punctuation">,</span> <span class="token string">"SIR"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

sheet1<span class="token punctuation">.</span><span class="token function">addRows</span><span class="token punctuation">(</span>headerRows<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加 数据行</span>
<span class="token keyword">const</span> dataRows <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> row <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectedRows<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> storeState <span class="token operator">=</span>
    row<span class="token punctuation">.</span>storeState <span class="token operator">===</span> <span class="token number">1</span>
      <span class="token operator">?</span> <span class="token string">"已入库"</span>
      <span class="token operator">:</span> row<span class="token punctuation">.</span>storeState <span class="token operator">===</span> <span class="token number">0</span>
      <span class="token operator">?</span> <span class="token string">"待入库"</span>
      <span class="token operator">:</span> <span class="token string">"未入库"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> crow <span class="token operator">=</span> <span class="token punctuation">[</span>
    row<span class="token punctuation">.</span>getName<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>sampleNo<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>sampleType<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>sourceNo<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>sourceLotNo<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>sourceAddr<span class="token punctuation">,</span>
    storeState<span class="token punctuation">,</span>
    row<span class="token punctuation">.</span>antibiotic<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> methodologies <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validMethodologies<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> methodologyID<span class="token punctuation">,</span> experimentDate <span class="token punctuation">}</span> <span class="token operator">=</span> methodologies<span class="token punctuation">;</span>
    <span class="token keyword">const</span> frow <span class="token operator">=</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableRawData<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">rawRow</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          rawRow<span class="token punctuation">.</span>getName <span class="token operator">===</span> row<span class="token punctuation">.</span>getName <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>sourceNo <span class="token operator">===</span> row<span class="token punctuation">.</span>sourceNo <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>sourceLotNo <span class="token operator">===</span> row<span class="token punctuation">.</span>sourceLotNo <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>sourceAddr <span class="token operator">===</span> row<span class="token punctuation">.</span>sourceAddr <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>storeState <span class="token operator">===</span> row<span class="token punctuation">.</span>storeState <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>antibiotic <span class="token operator">===</span> row<span class="token punctuation">.</span>antibiotic <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>methodologyID <span class="token operator">===</span> methodologyID <span class="token operator">&amp;&amp;</span>
          rawRow<span class="token punctuation">.</span>experimentDate <span class="token operator">===</span> experimentDate
      <span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    crow<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>frow<span class="token punctuation">.</span>micValue <span class="token operator">??</span> <span class="token string">""</span><span class="token punctuation">,</span> frow<span class="token punctuation">.</span>drugSusceptibilityExplanation <span class="token operator">??</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  dataRows<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>crow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
sheet1<span class="token punctuation">.</span><span class="token function">addRows</span><span class="token punctuation">(</span>dataRows<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 表头前 6 列合并</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"A1:A3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"B1:B3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"C1:C3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"D1:D3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"E1:E3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token string">"F1:F3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 表头6 列以后 两两合并</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> idx <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validMethodologies<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">+</span> idx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token operator">+</span> idx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sheet1<span class="token punctuation">.</span><span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">+</span> idx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token operator">+</span> idx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 设置样式</span>
sheet1<span class="token punctuation">.</span><span class="token function">eachRow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> rowNumber</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  row<span class="token punctuation">.</span><span class="token function">eachCell</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cell<span class="token punctuation">,</span> cellNumber</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(`rowNumber ${rowNumber},cellNumber ${cellNumber}`)</span>
    <span class="token comment">// 设置前三行(表头) 样式</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rowNumber <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cell<span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">"middle"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">wrapText</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      cell<span class="token punctuation">.</span>fill <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pattern"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fgColor</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FF008080"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      cell<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"thin"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FFD3D3D3"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"thin"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FFD3D3D3"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"thin"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FFD3D3D3"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"thin"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FFD3D3D3"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      cell<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">argb</span><span class="token operator">:</span> <span class="token string">"FFFFFFFF"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 三行以后 数据行的样式</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cellNumber <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cell<span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">"middle"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">wrapText</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">bold</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cellNumber <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cell<span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">"middle"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">wrapText</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// const rowStoreState = row.getCell(5).value</span>

      <span class="token comment">// const fgColor = rowStoreState === '已入库' ? '1e008080' : (rowStoreState === '待入库' ? '1ee6a23c' : '1ef56c6c')</span>

      <span class="token comment">// cell.fill = {</span>
      <span class="token comment">//   type: 'pattern',</span>
      <span class="token comment">//   pattern: 'solid',</span>
      <span class="token comment">//   fgColor: { argb: fgColor }</span>
      <span class="token comment">// }</span>
      <span class="token comment">// cell.border = {</span>
      <span class="token comment">//   left: { style: 'thin', color: { argb: 'FFD3D3D3' }},</span>
      <span class="token comment">//   bottom: { style: 'thin', color: { argb: 'FFD3D3D3' }},</span>
      <span class="token comment">//   right: { style: 'thin', color: { argb: 'FFD3D3D3' }}</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置前 6 列 width</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sheet1<span class="token punctuation">.</span><span class="token function">getColumn</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">saveWorkbook</span><span class="token punctuation">(</span>workbook<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.xlsx</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


