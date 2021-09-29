import{_ as s}from"./preload-helper.043fafbb.js";import{o as a,c as n,L as l}from"./vendor.1aa91344.js";const t={components:{}},p={class:"varlet-site-doc"},e=l(`<h1>\u5FBD\u6807</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(Badge)
</code></pre></div><div class="card"><h3>\u5FBD\u6807\u7C7B\u578B</h3><p>\u901A\u8FC7<code>type</code>\u5C5E\u6027\u8BBE\u7F6E\u5FBD\u6807\u7684\u7C7B\u578B\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u5706\u70B9\u5FBD\u6807</h3><p>\u901A\u8FC7<code>dot</code>\u5C5E\u6027\u5C06\u5FBD\u6807\u8BBE\u7F6E\u4E3A\u5706\u70B9\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9</h3><p>\u901A\u8FC7<code>value</code>\u5C5E\u6027\u8BBE\u7F6E\u5FBD\u6807\u7684\u5185\u5BB9\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;badge&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;66&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u6700\u5927\u503C</h3><p>\u901A\u8FC7<code>value</code>\u548C<code>max-value</code>\u63A7\u5236\u5FBD\u6807\u663E\u793A\u503C\u7684\u8303\u56F4\uFF08\u5F53<code>value</code>\u4E0E<code>max-value</code>\u90FD\u5B58\u5728\u65F6\u751F\u6548\uFF09\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">88</span>);
    <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">188</span>);
    <span class="hljs-keyword">const</span> maxValue = ref(<span class="hljs-number">99</span>);

    <span class="hljs-keyword">return</span> {
      value,
      value1,
      maxValue
    }
  }
}
</code></pre></div><div class="card"><h3>\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807</h3><p>\u901A\u8FC7<code>position</code>\u5C5E\u6027\u8BBE\u7F6E\u5FBD\u6807\u7684\u4F4D\u7F6E\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u53F3\u4E0A<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u53F3\u4E0B<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u5DE6\u4E0A<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u5DE6\u4E0B<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u662F\u5426\u663E\u793A\u5FBD\u6807</h3><p>\u901A\u8FC7<code>hidden</code>\u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u5FBD\u6807\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span>\u70B9\u51FB\u6539\u53D8\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">:hidden</span>=<span class="hljs-string">&quot;hidden&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u5FBD\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> hidden = ref(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {
      hidden.value = !hidden.value
    }

    <span class="hljs-keyword">return</span> {
      hidden,
      handleChange
    }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272</h3><p>\u901A\u8FC7<code>color</code>\u5C5E\u6027\u8BBE\u7F6E\u5FBD\u6807\u7684\u989C\u8272\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u5FBD\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807</h3><p>\u901A\u8FC7<code>icon</code>\u5C5E\u6027\u8BBE\u7F6E\u5FBD\u6807\u56FE\u6807\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;notebook&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u5FBD\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-badge</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>type</code></td><td>\u7C7B\u578B\uFF0C \u53EF\u9009\u503C\u4E3A <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>dot</code></td><td>\u5FBD\u6807\u662F\u5426\u4E3A\u5C0F\u5706\u70B9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>\u5FBD\u6807\u4E2D\u663E\u793A\u7684\u503C\uFF08\u5F53<code>dot</code>\u4E3A<code>false</code>\u65F6\u751F\u6548\uFF09</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>max-value</code></td><td>\u5FBD\u6807\u4E2D\u663E\u793A\u7684\u6700\u5927\u503C\uFF0C\u5F53<code>value</code>\u5927\u4E8E<code>max-value</code>\u65F6\u4F1A\u663E\u793A<code>max-value+</code>(\u5F53<code>value</code>\u4E0E<code>max-value</code>\u90FD\u5B58\u5728\u65F6\u751F\u6548)</td><td><em>number</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td>\u5FBD\u6807\u6807\u7B7E\u4E2D\u6709\u5176\u4ED6\u6807\u7B7E\u65F6\u5B9A\u4E49\u5FBD\u6807\u5728\u5176\u4ED6\u6807\u7B7E\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C<code>right-top</code> <code>top-bottom</code> <code>left-top</code> <code>left-bottom</code></td><td><em>string</em></td><td><code>right-top</code></td></tr><tr><td><code>color</code></td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u4E2D\u56FE\u6807\u7684\u5185\u5BB9\uFF08\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>value</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5FBD\u6807\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div>`,13),c=[e];function o(h,d,r,j,i,g){return a(),n("div",p,c)}var q=s(t,[["render",o]]);export{q as default};
