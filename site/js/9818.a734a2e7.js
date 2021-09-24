"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[9818],{9818:(s,a,t)=>{t.r(a),t.d(a,{default:()=>p});var n=t(6229),l={class:"varlet-site-doc"},e=[(0,n.uE)('<h1>Badge</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Badge)\n</code></pre></div><div class="card"><h3>Badge Type</h3><p>Set the badge type through the <code>type</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Dot Badge</h3><p>Set the badge as a dot through the <code>dot</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Customize Badge Content</h3><p>Set the content of the badge through the <code>value</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;badge&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;66&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Maximum</h3><p>Control the range of badge display values through <code>value</code> and <code>max-value</code> (effective when both <code>value</code> and <code>max-value</code> exist).</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">88</span>);\n    <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">188</span>);\n    <span class="hljs-keyword">const</span> maxValue = ref(<span class="hljs-number">99</span>);\n\n    <span class="hljs-keyword">return</span> { \n      value, \n      value1,\n      maxValue \n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Different Positioning Badges</h3><p>Set the position of the badge through the <code>position</code> property.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>The Upper Right<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>The Lower Right<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>The Upper Left<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>The Lower Left<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Whether To Display The Badge</h3><p>Set whether the badge is displayed through the <code>hidden</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span>Click To Change The State<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">:hidden</span>=<span class="hljs-string">&quot;hidden&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>Badge<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> hidden = ref(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {\n      hidden.value = !hidden.value\n    }\n\n    <span class="hljs-keyword">return</span> { \n      hidden, \n      handleChange \n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Custom Badge Colors</h3><p>Set the color of the badge through the <code>color</code> property.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>Badge<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Custom Badge Icon</h3><p>Set Badge Icon through <code>icon</code> property.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;notebook&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>Badge<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Badge type. Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>dot</code></td><td>Whether the badge is a dot</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>The value shown in the badge (takes effect when <code>dot</code> is <code>false</code>)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>max-value</code></td><td>The maximum value shown in the logo, when <code>value</code> is greater than <code>max-value</code>, displays <code>max-value+</code> (effective when both <code>value</code> and <code>max-value</code> exist)</td><td><em>number</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td>Define the position of the logo on other labels when there are other labels in the logo tag. Optional values are <code>right-top</code> <code>top-bottom</code> <code>left-top</code> <code>left-bottom</code></td><td><em>string</em></td><td><code>right-top</code></td></tr><tr><td><code>color</code></td><td>Custom badge colors</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Customize the content of the icon in the logo (priority is higher than <code>value</code>)</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Badge content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--badge-content-padding</code></td><td><code>2px 6px</code></td></tr><tr><td><code>--badge-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--badge-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--badge-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--badge-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--badge-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--badge-info-color</code></td><td><code>var(--color-info)</code></td></tr></tbody></table></div>',14)];var p={render:function(s,a){return(0,n.wg)(),(0,n.iD)("div",l,e)}}}}]);