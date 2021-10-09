import{S as n}from"./Chip.9168f42f.js";import{S as i}from"./wrap.5256b882.js";import{o as p,k as d,w as t,h as l,l as a,r as b,O as k,Q as w,f as x,d as r,c as $,a as s,L as o}from"./vendor.2c8e45dd.js";import{_ as C}from"./preload-helper.0a5f1423.js";const z=a("\u4E3B\u8981\u7EB8\u7247"),N=a("\u6210\u529F\u7EB8\u7247"),S=a("\u5371\u9669\u7EB8\u7247"),V=a("\u8B66\u544A\u7EB8\u7247"),B=a("\u4FE1\u606F\u7EB8\u7247"),A=a("\u9ED8\u8BA4\u7EB8\u7247"),R={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{type:"primary"},{default:t(()=>[z]),_:1}),l(n,{type:"success"},{default:t(()=>[N]),_:1}),l(n,{type:"danger"},{default:t(()=>[S]),_:1}),l(n,{type:"warning"},{default:t(()=>[V]),_:1}),l(n,{type:"info"},{default:t(()=>[B]),_:1}),l(n,null,{default:t(()=>[A]),_:1})]),_:1}))}};const E=a("\u7B80\u5355\u7EB8\u7247"),I={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{plain:"",type:"primary"},{default:t(()=>[E]),_:1})]),_:1}))}};const L=a("\u975E\u5706\u89D2\u7EB8\u7247"),O={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{square:"",type:"primary"},{default:t(()=>[L]),_:1})]),_:1}))}};const P=a("\u5927\u7EB8\u7247"),Q=a("\u5C0F\u7EB8\u7247"),T=a("\u8FF7\u4F60\u7EB8\u7247"),W={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{size:"large"},{default:t(()=>[P]),_:1}),l(n,{size:"small"},{default:t(()=>[Q]),_:1}),l(n,{size:"mini"},{default:t(()=>[T]),_:1})]),_:1}))}};const D=a("\u6210\u529F\u7EB8\u7247"),F={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{block:"",type:"success"},{default:t(()=>[D]),_:1})]),_:1}))}};const G=a("\u53EF\u5173\u95ED\u7EB8\u7247"),H={setup(h){let e=b(!0);return(c,_)=>(p(),d(i,null,{default:t(()=>[k(e)?(p(),d(n,{key:0,block:"",type:"success",onClose:_[0]||(_[0]=j=>w(e)?e.value=c.flase:e=c.flase)},{default:t(()=>[G]),_:1})):x("v-if",!0)]),_:1}))}};const J=a("\u7EB8\u7247"),K=a("\u7EB8\u7247"),M=a("\u7EB8\u7247"),U=a("\u7EB8\u7247"),X={setup(h){return(e,c)=>(p(),d(i,null,{default:t(()=>[l(n,{color:"#009688"},{default:t(()=>[J]),_:1}),l(n,{color:"#009688",plain:""},{default:t(()=>[K]),_:1}),l(n,{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:t(()=>[M]),_:1}),l(n,{color:"#faecd8","text-color":"#e6a23c"},{default:t(()=>[U]),_:1})]),_:1}))}},Y={components:{typeChip:R,plainChip:I,noRound:O,sizeChip:W,blockChip:F,closeChip:H,colorChip:X}},Z={class:"varlet-site-doc"},ss=o(`<h1>\u7EB8\u7247</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Chip } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>

createApp().use(Chip)
</code></pre></div>`,2),as={class:"card"},ts=s("h3",null,"\u7EB8\u7247\u7C7B\u578B",-1),ls=s("p",null,[a("\u901A\u8FC7"),s("code",null,"type"),a("\u5C5E\u6027\u8BBE\u7F6E\u7EB8\u7247\u7684\u7C7B\u578B\u3002")],-1),ns={class:"varlet-component-preview"},es=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u4FE1\u606F\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span>&gt;</span>\u9ED8\u8BA4\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),cs={class:"card"},ps=s("h3",null,"\u7B80\u5355\u7EB8\u7247",-1),os=s("p",null,[a("\u901A\u8FC7"),s("code",null,"plain"),a("\u5C5E\u6027\u5C06\u7EB8\u7247\u8BBE\u7F6E\u4E3A\u7B80\u5355\u7EB8\u7247\u3002")],-1),ds={class:"varlet-component-preview"},hs=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7B80\u5355\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),is={class:"card"},rs=s("h3",null,"\u975E\u5706\u89D2\u7EB8\u7247",-1),_s=s("p",null,[a("\u901A\u8FC7\u628A"),s("code",null,"round"),a("\u5C5E\u6027\u8BBE\u7F6E\u4E3A"),s("code",null,"false"),a("\u6765\u53D6\u6D88\u7EB8\u7247\u7684\u5706\u89D2\u6837\u5F0F\u3002")],-1),js={class:"varlet-component-preview"},us=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u975E\u5706\u89D2\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),ms={class:"card"},gs=s("h3",null,"\u7EB8\u7247\u5C3A\u5BF8",-1),fs=s("p",null,[a("\u901A\u8FC7"),s("code",null,"size"),a("\u5C5E\u6027\u8BBE\u7F6E\u7EB8\u7247\u7684\u5C3A\u5BF8\u3002")],-1),ys={class:"varlet-component-preview"},vs=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>\u5927\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span>&gt;</span>\u5E38\u89C4\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u8FF7\u4F60\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),qs={class:"card"},bs=s("h3",null,"\u5757\u7EA7\u7EB8\u7247",-1),ks=s("p",null,[a("\u901A\u8FC7"),s("code",null,"block"),a("\u5C5E\u6027\u5C06\u7EB8\u7247\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u7EB8\u7247\u3002")],-1),ws={class:"varlet-component-preview"},xs=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>\u5757\u7EA7\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),$s={class:"card"},Cs=s("h3",null,"\u53EF\u5173\u95ED\u7EB8\u7247",-1),zs=s("p",null,[a("\u901A\u8FC7"),s("code",null,"closable"),a("\u5C5E\u6027\u5C06\u7EB8\u7247\u8BBE\u7F6E\u4E3A\u53EF\u5173\u95ED\u7EB8\u7247\u3002")],-1),Ns={class:"varlet-component-preview"},Ss=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">closable</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>\u53EF\u5173\u95ED\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show1&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show1 = false&quot;</span>&gt;</span>
  \u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807
<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">true</span>)
    <span class="hljs-keyword">const</span> show1= ref(<span class="hljs-literal">true</span>)

    <span class="hljs-keyword">return</span> { 
      show, 
      show1 
    }
  }
}
</code></pre>`,2),Vs={class:"card"},Bs=s("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),As=s("p",null,[a("\u901A\u8FC7"),s("code",null,"color"),a("\u548C"),s("code",null,"text-color"),a("\u5C5E\u6027\u8BBE\u7F6E\u7EB8\u7247\u989C\u8272\u3002")],-1),Rs={class:"varlet-component-preview"},Es=o(`<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">simples-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span>&gt;</span>\u7EB8\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">simples-chip</span>&gt;</span>
</code></pre>`,1),Is=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>type</code></td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>\u5C3A\u5BF8\uFF0C \u53EF\u9009\u503C\u4E3A <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>plain</code></td><td>\u662F\u5426\u4E3A\u7A7A\u5FC3\u6837\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>\u662F\u5426\u4E3A\u5706\u89D2\u6837\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>block</code></td><td>\u662F\u5426\u4E3A\u5757\u7EA7\u6837\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u4E3A\u53EF\u5173\u95ED\u7EB8\u7247</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-name</code></td><td>\u81EA\u5B9A\u4E49\u53EF\u5173\u95ED\u7EB8\u7247\u7684\u56FE\u6807\uFF0C\u5FC5\u987B\u5728<code>closeable</code>\u4E3A<code>true</code>\u7684\u6761\u4EF6\u4E0B\u624D\u80FD\u7528</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u7EB8\u7247\u989C\u8272</td><td><em>string</em></td><td><code>_</code></td></tr><tr><td><code>text-color</code></td><td>\u6587\u672C\u989C\u8272\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>color</code>\u5C5E\u6027</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u7EB8\u7247\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>\u63D2\u5165\u81F3\u7EB8\u7247\u5DE6\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>\u63D2\u5165\u81F3\u7EB8\u7247\u53F3\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>close</code></td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1\uFF0C\u53EA\u6709\u5728\u663E\u793A\u5173\u95ED\u6309\u94AE\u7684\u65F6\u5019\u624D\u80FD\u4F7F\u7528</td><td><code>event: Event</code></td></tr></tbody></table></div>',4);function Ls(h,e,c,_,j,Os){const u=r("type-chip"),m=r("plain-chip"),g=r("no-round"),f=r("size-chip"),y=r("block-chip"),v=r("close-chip"),q=r("color-chip");return p(),$("div",Z,[ss,s("div",as,[ts,ls,s("div",ns,[l(u)]),es]),s("div",cs,[ps,os,s("div",ds,[l(m)]),hs]),s("div",is,[rs,_s,s("div",js,[l(g)]),us]),s("div",ms,[gs,fs,s("div",ys,[l(f)]),vs]),s("div",qs,[bs,ks,s("div",ws,[l(y)]),xs]),s("div",$s,[Cs,zs,s("div",Ns,[l(v)]),Ss]),s("div",Vs,[Bs,As,s("div",Rs,[l(q)]),Es]),Is])}var Ds=C(Y,[["render",Ls]]);export{Ds as default};