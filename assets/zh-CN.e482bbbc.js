import{s as d}from"./Button.7f8d72c8.js";import{S as g}from"./wrap.46674620.js";import{S as u}from"./ImagePreview.ca6fdacc.js";import{r as n,o as i,k as v,w as r,h as t,f as k,l as h,d as w,c as _,a as p,L as j}from"./vendor.2c8e45dd.js";import{_ as y}from"./preload-helper.3d8d7269.js";const b=h("\u57FA\u672C\u4F7F\u7528"),q=h("\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E"),S={setup(m){const a=n(!1),o=n(!1),c=n(["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"]);return(e,s)=>(i(),v(g,null,{default:r(()=>[t(d,{type:"warning",block:"",onClick:s[0]||(s[0]=l=>a.value=!0)},{default:r(()=>[b]),_:1}),t(u,{images:c.value,show:a.value,"onUpdate:show":s[1]||(s[1]=l=>a.value=l)},null,8,["images","show"]),k(" \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E "),t(d,{type:"warning",block:"",onClick:s[2]||(s[2]=l=>o.value=!0)},{default:r(()=>[q]),_:1})]),_:1}))}},x=h("\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E"),P={setup(m){n(!1);const a=n(!1),o=n(["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"]);return(c,e)=>(i(),v(g,null,{default:r(()=>[t(d,{type:"warning",block:"",onClick:e[0]||(e[0]=s=>a.value=!0)},{default:r(()=>[x]),_:1}),t(u,{current:"https://varlet.gitee.io/varlet-ui/cat2.jpg",images:o.value,currentShow:a.value,"onUpdate:currentShow":e[1]||(e[1]=s=>a.value=s)},null,8,["images","currentShow"])]),_:1}))}},C={components:{mainPreview:S,adressPreview:P}},I={class:"varlet-site-doc"},$=j(`<h1>ImagePreview \u56FE\u7247\u9884\u89C8</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(ImagePreview)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

<span class="hljs-comment">// \u5C40\u90E8\u6CE8\u518C</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
</code></pre></div><div class="card"><h3>\u51FD\u6570\u8C03\u7528</h3></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">ImagePreview(<span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>)
</code></pre></div><div class="card"><h3>\u5904\u7406\u56DE\u8C03\u51FD\u6570</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">const</span> images = [
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>
]

ImagePreview({
  images,
  <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">index</span>)</span> {
    <span class="hljs-built_in">console</span>.log(index)
  }
})
</code></pre></div><h2>\u7EC4\u4EF6\u4F7F\u7528</h2>`,8),N={class:"card"},U=p("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),B={class:"varlet-component-preview"},E={class:"varlet-component-preview"},L=j(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-button</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
&gt;</span>
  \u57FA\u672C\u4F7F\u7528
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-image-preview</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;currentShow = true&quot;</span>
&gt;</span>
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-image-preview</span>
  <span class="hljs-attr">current</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;currentShow&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">simples-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeShow = true&quot;</span>
&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> currentShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> closeShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> closeEventShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> images = ref([
      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>,
    ])

    <span class="hljs-keyword">const</span> handleCloseEvent = <span class="hljs-function">() =&gt;</span> Snackbar(<span class="hljs-string">&#39;\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      images,
      handleCloseEvent,
    }
  },
}
</code></pre>`,2),V=j('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL\u6570\u7EC4</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247URL\u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684url</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr></tbody></table></div>',3);function R(m,a,o,c,e,s){const l=w("main-preview"),f=w("adress-preview");return i(),_("div",I,[$,p("div",N,[U,p("div",B,[t(l)]),p("div",E,[t(f)]),L]),V])}var D=y(C,[["render",R]]);export{D as default};
