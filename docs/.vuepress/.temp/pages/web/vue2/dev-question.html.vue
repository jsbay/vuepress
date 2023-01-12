<template><div><h1 id="开发中碰到的问题" tabindex="-1"><a class="header-anchor" href="#开发中碰到的问题" aria-hidden="true">#</a> 开发中碰到的问题</h1>
<h2 id="vue-admin-template" tabindex="-1"><a class="header-anchor" href="#vue-admin-template" aria-hidden="true">#</a> vue-admin-template</h2>
<blockquote>
<p>问题描述: 左侧 menu 菜单 切换时, vue 组件 <code v-pre>create</code> 中声明的<code v-pre>getData</code> 之类的方法仅第一次执行</p>
</blockquote>
<blockquote>
<p>问题解决: 可能是因为 router 中声明的 name 值 重复 的原因,可以尝试修改 name 再次尝试</p>
</blockquote>
</div></template>


