"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[4591],{4591:(s,a,t)=>{t.r(a),t.d(a,{default:()=>p});var l=t(6252),n={class:"varlet-site-doc"},c=(0,l.uE)('<h1>纸片</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Chip } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Chip)\n</code></pre></div><div class="card"><h3>纸片类型</h3><p>通过<code>type</code>属性设置纸片的类型。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>信息纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span>&gt;</span>默认纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>简单纸片</h3><p>通过<code>plain</code>属性将纸片设置为简单纸片。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>简单纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>非圆角纸片</h3><p>通过把<code>round</code>属性设置为<code>false</code>来取消纸片的圆角样式。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>非圆角纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>纸片尺寸</h3><p>通过<code>size</code>属性设置纸片的尺寸。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>大纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span>&gt;</span>常规纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>小纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>迷你纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>块级纸片</h3><p>通过<code>block</code>属性将纸片设置为块级纸片。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>块级纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>可关闭纸片</h3><p>通过<code>closable</code>属性将纸片设置为可关闭纸片，使用<code>close-name</code>属性设置纸片的关闭图标样式（必须在<code>closeable</code>为<code>true</code>的条件下才能使用）。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">closable</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>可关闭纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span>\n  <span class="hljs-attr">closable</span>\n  <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;delete&quot;</span>\n  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show1&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show1 = false&quot;</span>&gt;</span>\n  自定义关闭图标\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">const</span> show1= ref(<span class="hljs-literal">true</span>)\n\n    <span class="hljs-keyword">return</span> { \n      show, \n      show1 \n    }\n  }\n}\n</code></pre></div><div class="card"><h3>自定义颜色</h3><p>通过<code>color</code>和<code>text-color</code>属性设置纸片颜色。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span>&gt;</span>纸片<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>添加插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  左侧插槽\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;star&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  右侧插槽\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fire&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  左右两侧插槽\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;account-circle&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cake-variant&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>类型，可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>尺寸， 可选值为 <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>plain</code></td><td>是否为空心样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>是否为圆角样式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>block</code></td><td>是否为块级样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeable</code></td><td>是否为可关闭纸片</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-name</code></td><td>自定义可关闭纸片的图标，必须在<code>closeable</code>为<code>true</code>的条件下才能用</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>纸片颜色</td><td><em>string</em></td><td><code>_</code></td></tr><tr><td><code>text-color</code></td><td>文本颜色，优先级高于<code>color</code>属性</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>纸片内容</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>插入至纸片左侧的内容</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>插入至纸片右侧的内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>close</code></td><td>点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--chip-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--chip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--chip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--chip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--chip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--chip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--chip-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--chip-mini-height</code></td><td><code>16px</code></td></tr><tr><td><code>--chip-small-height</code></td><td><code>24px</code></td></tr><tr><td><code>--chip-normal-height</code></td><td><code>32px</code></td></tr><tr><td><code>--chip-large-height</code></td><td><code>40px</code></td></tr><tr><td><code>--chip-round-radius</code></td><td><code>100px</code></td></tr><tr><td><code>--chip-mini-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--chip-small-padding</code></td><td><code>0 6px</code></td></tr><tr><td><code>--chip-normal-padding</code></td><td><code>0 10px</code></td></tr><tr><td><code>--chip-large-padding</code></td><td><code>0 17px</code></td></tr><tr><td><code>--chip-text-large-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--chip-text-normal-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--chip-text-small-margin</code></td><td><code>0 3px</code></td></tr><tr><td><code>--chip-text-mini-margin</code></td><td><code>0 2px</code></td></tr></tbody></table></div>',15);const p={components:{},render:function(s,a,t,p,e,d){return(0,l.wg)(),(0,l.j4)("div",n,[c])}}}}]);