import{_ as s}from"./preload-helper.043fafbb.js";import{o as a,c as t,L as l}from"./vendor.1aa91344.js";const e={components:{}},n={class:"varlet-site-doc"},d=l(`<h1>\u5206\u5272\u7EBF</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5206\u9694\u5217\u8868\u6216\u5E03\u5C40\u7684\u5404\u4E2A\u90E8\u5206\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(Divider)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">&lt;simples-divider /&gt;
</code></pre></div><div class="card"><h3>\u865A\u7EBF</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">&lt;simples-divider dashed /&gt;
</code></pre></div><div class="card"><h3>\u7F29\u8FDB</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">&lt;simples-divider inset /&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">:inset</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">margin</span>=<span class="hljs-string">&quot;36px 0&quot;</span> /&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">inset</span>=<span class="hljs-string">&quot;-36px&quot;</span> /&gt;</span></span>
</code></pre></div><div class="card"><h3>\u5782\u76F4\u5206\u5272\u7EBF</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">&lt;span&gt;\u6587\u5B57&lt;/span&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u6587\u5B57<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">simples-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u6587\u5B57<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
</code></pre></div><div class="card"><h3>\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">&lt;simples-divider description=<span class="hljs-string">&quot;\u6587\u5B57\u63CF\u8FF0&quot;</span> /&gt;
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>inset</td><td>\u8BBE\u7F6E\u7F29\u8FDB\u8DDD\u79BB\uFF0C\u6B63\u8D1F\u53F7\u53EF\u63A7\u5236\u7F29\u8FDB\u65B9\u5411\u3002\u5F53\u4F20\u9012<code>true</code>\u65F6\u9ED8\u8BA4\u7F29\u8FDB\u4E3A<code>72px</code></td><td><em>boolean | number | string</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>\u662F\u5426\u5782\u76F4</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>dashed</td><td>\u865A\u7EBF</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>description</td><td>\u5206\u5272\u7EBF\u7684\u6587\u5B57\u63CF\u8FF0</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u5206\u5272\u7EBF\u6587\u5B57\u63CF\u8FF0\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div>`,11),c=[d];function p(r,h,i,o,j,m){return a(),t("div",n,c)}var f=s(e,[["render",p]]);export{f as default};