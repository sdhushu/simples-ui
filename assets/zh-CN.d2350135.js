import{_ as s}from"./preload-helper.043fafbb.js";import{o as a,c as t,L as l}from"./vendor.1aa91344.js";const n={components:{}},e={class:"varlet-site-doc"},d=l(`<h1>\u9AA8\u67B6\u5C4F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u663E\u793A\u4E00\u4E9B\u5E26\u8FC7\u6E21\u6548\u679C\u7684\u5360\u4F4D\u5143\u7D20\uFF0C\u4F18\u5316\u52A0\u8F7D\u8FC7\u7A0B\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(Skeleton)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-skeleton</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>\u52A0\u8F7D\u7684\u6570\u636E<span class="hljs-tag">&lt;/<span class="hljs-name">simples-skeleton</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)

    <span class="hljs-keyword">return</span> { loading }
  }
}
</code></pre></div><div class="card"><h3>\u663E\u793A\u6807\u9898</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"> <span class="hljs-tag">&lt;<span class="hljs-name">simples-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>\u52A0\u8F7D\u7684\u6570\u636E<span class="hljs-tag">&lt;/<span class="hljs-name">simples-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:rows-width</span>=<span class="hljs-string">&quot;[&#39;200px&#39;, &#39;100px&#39;, &#39;50px&#39;]&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u5934\u50CF</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u5361\u7247</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">card</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-skeleton</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u5F00\u542F\u9AA8\u67B6\u5C4F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>title</code></td><td>\u662F\u5426\u663E\u793A\u6807\u9898</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>card</code></td><td>\u662F\u5426\u663E\u793A\u5361\u7247</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>avatar</code></td><td>\u662F\u5426\u663E\u793A\u5934\u50CF</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title-width</code></td><td>\u6807\u9898\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>50%</code></td></tr><tr><td><code>card-height</code></td><td>\u5361\u7247\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>160px</code></td></tr><tr><td><code>avatar-size</code></td><td>\u5934\u50CF\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>34px</code></td></tr><tr><td><code>rows</code></td><td>\u6BB5\u843D\u884C\u6570</td><td><em>string | number</em></td><td><code>3</code></td></tr><tr><td><code>rows-width</code></td><td>\u6BB5\u843D\u6BCF\u4E00\u884C\u7684\u5BBD\u5EA6</td><td><em>number[] | string[]</em></td><td><code>[&#39;12px&#39;, &#39;12px&#39;, &#39;12px&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div>`,11),c=[d];function o(p,r,h,i,j,m){return a(),t("div",e,c)}var f=s(n,[["render",o]]);export{f as default};
