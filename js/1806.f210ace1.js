"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[1806],{1806:(t,s,d)=>{d.r(s),d.d(s,{default:()=>l});var e=d(6252),c={class:"varlet-site-doc"},a=[(0,e.uE)('<h1>Cell 单元格</h1><div class="card"><h3>介绍</h3><p>单元格为列表中的单个展示项。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Cell)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span> 这是单元格 <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n</code></pre></div><div class="card"><h3>显示图标</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;这是单元格&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extra</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n</code></pre></div><div class="card"><h3>显示描述</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;这是单元格&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;描述&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>显示边框</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">border</span>&gt;</span> 这是单元格 <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>单元格标题</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>左侧图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>单元格描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>是否显示边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>icon-class</code></td><td>图标额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>标题额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc-class</code></td><td>描述额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>右侧内容额外类名</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>cell的内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义左侧icon区域</td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>描述的内容</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>自定义右侧区域内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-desc-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-desc-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>',11)];var l={render:function(t,s){return(0,e.wg)(),(0,e.iD)("div",c,a)}}}}]);