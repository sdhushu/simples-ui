"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[9782],{9782:(s,t,a)=>{a.r(t),a.d(t,{default:()=>c});var e=a(6229),l={class:"varlet-site-doc"},d=[(0,e.uE)('<h1>Switch</h1><div class="card"><h3>Intro</h3><p>Switching Selector.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Switch)\n</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-literal">true</span>)\n\n    <span class="hljs-keyword">return</span> {\n      value\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Not Available</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Custom color</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:ripple</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> <span class="hljs-attr">close-color</span>=<span class="hljs-string">&quot;#f5cb90&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Size</h3><p>Use <code>size</code> prop to change size of Switch.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Loading</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">loading-color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Validate value</h3><p>The values are validated by passing in an array of validators，If the validator returns <code>true</code>, the validation passes. Other values are converted to text as a user prompt.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v === true || &#39;Error！&#39;]&quot;</span>/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Check status of Switch</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>active-value</code></td><td>The value when the switch is turned on</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>inactive-value</code></td><td>The value when the switch is turned off</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable switch</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether to readonly switch</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>Whether to show loading icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>color</code></td><td>Background color when open</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>close-color</code></td><td>Background color when close</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>loading-color</code></td><td>Color of loading icon</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>size</code></td><td>Size of switch</td><td><em>string | number</em></td><td><code>20</code></td></tr><tr><td><code>rules</code></td><td>Validation rules</td><td><em>array</em></td><td>-</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Emitted when component is clicked</td><td><code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Emitted when check status changed</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--switch-track-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-track-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-track-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--switch-ripple-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-handle-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-handle-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-handle-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-handle-error-background</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table></div>',13)];var c={render:function(s,t){return(0,e.wg)(),(0,e.iD)("div",l,d)}}}}]);