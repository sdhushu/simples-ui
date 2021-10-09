import l from"./index.89ddfd4c.js";import{_ as e}from"./preload-helper.0a5f1423.js";import{d as p,o as c,c as d,a as s,h as o,l as a,L as t}from"./vendor.2c8e45dd.js";import"./TabsItems.003d988f.js";import"./TabItem.2579711c.js";import"./AppType.623b3934.js";const h={components:{example:l}},r={class:"varlet-site-doc"},i=s("h1",null,"\u9009\u9879\u5361\u7EC4",-1),m=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,[a("\u4F7F\u7528"),s("code",null,"Tabs"),a("\u3001"),s("code",null,"Tab"),a("\u5B9E\u73B0\u9009\u9879\u5361\u7EC4\u7684\u5207\u6362\u3002\u4F7F\u7528"),s("code",null,"TabsItems"),a("\u3001"),s("code",null,"TabItem"),a("\u5B9E\u73B0\u548C\u9009\u9879\u5361\u7EC4\u7684\u89C6\u56FE\u8054\u52A8\u3002")])],-1),j={class:"card"},g=s("h3",null,"\u5F15\u5165",-1),b={class:"varlet-component-preview"},u=t(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Tabs, Tab, TabsItems, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
</code></pre>`,1),v=t(`<div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>\u5177\u540D\u9009\u9879\u5361</h3><p>Tabs\u9ED8\u8BA4\u901A\u8FC7<code>active</code>\u53BB\u5339\u914DTab\u7684<code>index</code>\u6765\u51B3\u5B9A\u54EA\u4E2A\u9009\u9879\u5361\u88AB\u6FC0\u6D3B\u3002 \u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED9Tab\u8BBE\u7F6E<code>name</code>\u6765\u547D\u540D\u9009\u9879\u5361\uFF0C\u8FD9\u65F6Tabs\u4F1A\u4F18\u5148\u5339\u914D<code>name</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98791&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98792&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98793&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-string">&#39;\u9009\u98791&#39;</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>\u4FEE\u6539\u6837\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"> <span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528\u9009\u9879</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u9009\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u89C6\u56FE\u8054\u52A8</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-tabs-items</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab-item</span>&gt;</span>
    \u545C\u5566\u5566\u5566\u706B\u8F66\u7B1B\uFF0C\u968F\u7740\u5954\u817E\u7684\u9A6C\u8E44\u3002
    \u5C0F\u59B9\u59B9\u5439\u7740\u53E3\u7434\uFF0C\u5915\u9633\u4E0B\u7F8E\u4E86\u526A\u5F71\u3002
    \u6211\u7528\u5B50\u5F39\u5199\u65E5\u8BB0\uFF0C\u4ECB\u7ECD\u5B8C\u4E86\u98CE\u666F\u3002
    \u63A5\u4E0B\u6765\u6362\u4ECB\u7ECD\u6211\u81EA\u5DF1\u3002
    \u6211\u867D\u7136\u662F\u4E2A\u725B\u4ED4\uFF0C\u5728\u9152\u5427\u53EA\u70B9\u725B\u5976\u3002
    \u4E3A\u4EC0\u4E48\u4E0D\u559D\u5564\u9152\uFF0C\u56E0\u4E3A\u5564\u9152\u4F24\u8EAB\u4F53\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab-item</span>&gt;</span>
    \u5F88\u591A\u4EBA\u4E0D\u957F\u773C\u775B\uFF0C\u56A3\u5F20\u90FD\u9760\u6B66\u5668\u3002
    \u8D64\u624B\u7A7A\u62F3\u5C31\u7F29\u6210\u8682\u8681\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">simples-tab-item</span>&gt;</span>
    \u4F60\u4EEC\u4E00\u8D77\u4E0A\uFF0C\u6211\u5728\u8D76\u65F6\u95F4\u3002
    \u6BCF\u5929\u51B3\u6597\u89C2\u4F17\u90FD\u7D2F\u4E86\uFF0C\u82F1\u96C4\u4E5F\u7D2F\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u526F\u6B4C\u4E0D\u957F\u4F60\u4EEC\u6709\u51E0\u4E2A\uFF0C\u4E00\u8D77\u4E0A\u597D\u4E86\u3002
    \u6B63\u4E49\u547C\u5524\u6211\uFF0C\u7F8E\u5973\u9700\u8981\u6211\u3002
    \u725B\u4ED4\u5F88\u5FD9\u7684\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">simples-tab-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-tabs-items</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Tabs Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u6807\u8BC6, \u4F18\u5148\u5339\u914Dname\uFF0C\u5176\u6B21\u662Findex</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>\u9009\u9879\u5361\u7EC4\u7684\u5E03\u5C40\u65B9\u5411\uFF0C \u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>\u9009\u9879\u5361\u7684\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>\u662F\u5426\u56FA\u5B9A\u5728\u7A97\u53E3\u5E95\u90E8, \u53EF\u7528\u505A\u5E95\u90E8\u5BFC\u822A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u5361\u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>\u9009\u9879\u5361\u672A\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>\u9009\u9879\u5361\u7981\u7528\u65F6\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>\u662F\u5426\u542F\u7528\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>\u662F\u5426\u542F\u7528\u7C98\u6027\u5E03\u5C40</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>\u5438\u9876\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Tab Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u5361\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879\u5361</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabsItems Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u7684\u6807\u8BC6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>\u662F\u5426\u5141\u8BB8\u6ED1\u52A8\u5207\u6362</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5141\u8BB8\u5FAA\u73AF\u5207\u6362</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u89C6\u56FE\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div>`,11);function f(y,q,_,k,x,T){const n=p("example");return c(),d("div",r,[i,m,s("div",j,[g,s("div",b,[o(n)]),u]),v])}var A=e(h,[["render",f]]);export{A as default};
