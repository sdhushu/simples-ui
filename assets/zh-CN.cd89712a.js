import{_ as s}from"./preload-helper.043fafbb.js";import{o as a,c as t,L as n}from"./vendor.1aa91344.js";const l={components:{}},e={class:"varlet-site-doc"},p=n(`<h1>\u56FE\u7247</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u66F4\u65B9\u4FBF\u7684\u5C3A\u5BF8\uFF0C\u5706\u89D2\u7684\u8BBE\u7F6E\u65B9\u5F0F</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Image } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(Image)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u586B\u5145\u6A21\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u5706\u89D2</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">radius</span>=<span class="hljs-string">&quot;50%&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</h3><p>\u5728<code>.vue</code>\u6587\u4EF6\u4E2D,<code>Vue\u7EC4\u4EF6</code>\u4E0D\u4F1A\u5982\u540C\u539F\u751Fimg\u4E00\u6837\u88AB\u6784\u5EFA\u5DE5\u5177\u81EA\u52A8\u5904\u7406\u6A21\u5757\u8BF7\u6C42\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u5BFC\u5165\u56FE\u7247\u8D44\u6E90\u3002 \u4E0B\u9762\u662F\u4E0D\u540C\u6784\u5EFA\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u5F0F\u3002</p><h4>Webpack</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#39;../../assets/logo.png&#39;)&quot;</span>/&gt;</span>
</code></pre><h4>Vite</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;logo&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../assets/logo.png&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { logo }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>src</code></td><td>\u56FE\u7247\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>alt</code></td><td>\u66FF\u4EE3\u6587\u672C</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>width</code></td><td>\u56FE\u7247\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>\u56FE\u7247\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>radius</code></td><td>\u56FE\u7247\u5706\u89D2</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>block</code></td><td>\u662F\u5426\u662F\u5757\u7EA7\u5143\u7D20</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table></div>`,10),c=[p];function h(r,o,d,i,j,g){return a(),t("div",e,c)}var q=s(l,[["render",h]]);export{q as default};
