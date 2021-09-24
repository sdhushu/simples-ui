"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[3271],{3271:(s,a,l)=>{l.r(a),l.d(a,{default:()=>c});var n=l(6252),t={class:"varlet-site-doc"},p=[(0,n.uE)('<h1>Loading 加载</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Loading)\n</code></pre></div><div class="card"><h3>Loading 类型</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Loading 颜色</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span>  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Loading 大小</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>loading 的颜色</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>type</code></td><td>loading 的类型，可选值为 <code>circle</code> <code>wave</code> <code>cube</code> <code>rect</code> <code>disappear</code></td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>size</code></td><td>loading 的大小，可选值位 <code>large</code> <code>normal</code> <code>small</code> <code>mini</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table></div>',7)];var c={render:function(s,a){return(0,n.wg)(),(0,n.iD)("div",t,p)}}}}]);