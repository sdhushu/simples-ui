import{_ as s}from"./preload-helper.0a5f1423.js";import{o as t,c as e,L as a}from"./vendor.2c8e45dd.js";const n={components:{}},d={class:"varlet-site-doc"},o=a(`<h1>ImagePreview</h1><div class="card"><h3>Intro</h3><p>Image-Preview, Support double-click magnification, Support function call and component call two ways.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(ImagePreview)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
</code></pre></div><div class="card"><h3>Function Call</h3><h4>Basic Usage</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">ImagePreview(<span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>)
</code></pre><h4>Call Back</h4><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">const</span> images = [
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>
]

ImagePreview({
  images,
  <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">index</span>)</span> {
    <span class="hljs-built_in">console</span>.log(index)
  }
})
</code></pre></div><h2>Component Call</h2><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
&gt;</span>
  Basic Use
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;currentShow = true&quot;</span>
&gt;</span>
  Specify initial position
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>
  <span class="hljs-attr">current</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;currentShow&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeShow = true&quot;</span>
&gt;</span>
  Display the close button
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeShow&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">block</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeEventShow = true&quot;</span>
&gt;</span>
  Listen for close event
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> 
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeEventShow&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleCloseEvent&quot;</span> 
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

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

    <span class="hljs-keyword">const</span> handleCloseEvent = <span class="hljs-function">() =&gt;</span> Snackbar(<span class="hljs-string">&#39;The shutdown event was triggered.&#39;</span>)
    
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
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number(Image indexing)</code></td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slot</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number(Image indexing), length: number(Total number of image)</code></td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code> #ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code> #000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>13px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code> 14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,13),l=[o];function c(r,p,i,h,g,m){return t(),e("div",d,l)}var v=s(n,[["render",c]]);export{v as default};
