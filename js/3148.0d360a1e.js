"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[3148],{3148:(t,d,s)=>{s.r(d),s.d(d,{default:()=>o});var e=s(6252),c={class:"varlet-site-doc"},a=[(0,e.uE)('<h1>Snackbar 消息条</h1><div class="card"><h3>介绍</h3><p>用于向用户显示快速消息。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>\n\ncreateApp().use(Snackbar)\n</code></pre></div><div class="card"><h3>局部引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;simples-ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    [Snackbar.Component.name]: Snackbar\n  }\n}\n</code></pre></div><div class="card"><h3>组件调用</h3><h4>基本使用</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = !show&quot;</span>&gt;</span>基本使用<span class="hljs-tag">&lt;/<span class="hljs-name">simples-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">simples-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span> 这是一个消息条！！<span class="hljs-tag">&lt;/<span class="hljs-name">simples-snackbar</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      show\n    }\n  }\n}\n</code></pre><h4>显示时长</h4><p>通过<code>duration</code>属性改变<code>snackbar</code>显示时长。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">simples-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1000&quot;</span>&gt;</span> 这是一个消息条！！<span class="hljs-tag">&lt;/<span class="hljs-name">simples-snackbar</span>&gt;</span>\n</code></pre></div><div class="card"><h3>函数调用</h3><h4>基本使用</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">Snackbar(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\n</code></pre><h4>显示时长</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">Snackbar({\n <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;这是一个消息条！！&#39;</span>,\n <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>\n})\n</code></pre><h4>底部显示</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">Snackbar({\n <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;这是一个消息条！！&#39;</span>,\n <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>\n})\n</code></pre></div><div class="card"><h3>Snackbar 类型</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">Snackbar.success(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\nSnackbar.warning(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\nSnackbar.info(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\nSnackbar.error(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\nSnackbar.loading(<span class="hljs-string">&#39;这是一个消息条！！&#39;</span>)\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示<code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code>类型，可选值为<code>success, warning, info, error, loading</code>之一</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code>位置，可选值为<code>top, center, bottom</code>之一</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开<code>Snackbar</code>时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开<code>Snackbar</code>动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭<code>Snackbar</code>时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭<code>Snackbar</code>动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> 内容</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> 右边动作区</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>实例上的<code>clear</code>方法可关闭当前实例，全局<code>clear</code>方法可关闭所有的消息条。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>显示消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.success</code></td><td>显示成功消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.info</code></td><td>显示普通消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>显示警告消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.error</code></td><td>显示错误消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>显示加载消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>关闭消息条</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>是否允许多例模式</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>show</code></td><td>是否显示<code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code>类型，可选值为<code>success, warning, info, error, loading</code>之一</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code>位置，可选值为<code>top, center, bottom</code>之一</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长(当<code>type</code>属性为<code>loading</code>时，需要手动关闭)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>加载动画类型(见<code>Loading</code>组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>加载动画大小(见<code>Loading</code>组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>是否禁止穿透点击(当<code>type</code>属性为<code>loading</code>时，默认为<code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>打开<code>Snackbar</code>时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>打开<code>Snackbar</code>动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>关闭<code>Snackbar</code>时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭<code>Snackbar</code>动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div>',13)];var o={render:function(t,d){return(0,e.wg)(),(0,e.iD)("div",c,a)}}}}]);