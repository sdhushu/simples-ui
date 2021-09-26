"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[9147],{9147:(s,a,l)=>{l.r(a),l.d(a,{default:()=>n});var t=l(6252),e={class:"varlet-site-doc"},d=[(0,t.uE)('<h1>分割线</h1><div class="card"><h3>介绍</h3><p>用于分隔列表或布局的各个部分。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>\n\ncreateApp().use(Divider)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">&lt;simples-divider /&gt;\n</code></pre></div><div class="card"><h3>虚线</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">&lt;simples-divider dashed /&gt;\n</code></pre></div><div class="card"><h3>缩进</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">&lt;simples-divider inset /&gt;\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">:inset</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">margin</span>=<span class="hljs-string">&quot;36px 0&quot;</span> /&gt;</span></span>\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">inset</span>=<span class="hljs-string">&quot;-36px&quot;</span> /&gt;</span></span>\n</code></pre></div><div class="card"><h3>垂直分割线</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">&lt;span&gt;文字&lt;/span&gt;\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span></span>\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span></span>\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>\n</code></pre></div><div class="card"><h3>带有文字描述的分割线</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">&lt;simples-divider description=<span class="hljs-string">&quot;文字描述&quot;</span> /&gt;\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>inset</td><td>设置缩进距离，正负号可控制缩进方向。当传递<code>true</code>时默认缩进为<code>72px</code></td><td><em>boolean | number | string</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>是否垂直</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>dashed</td><td>虚线</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>description</td><td>分割线的文字描述</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义分割线文字描述内容</td><td><code>-</code></td></tr></tbody></table></div>',11)];var n={render:function(s,a){return(0,t.wg)(),(0,t.iD)("div",e,d)}}}}]);