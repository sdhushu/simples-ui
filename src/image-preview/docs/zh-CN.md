# ImagePreview 图片预览

### 介绍

图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。

### 引入
```vue
import example from '../example'
```


```js
import { createApp } from 'vue'
import { ImagePreview } from 'simples-ui'

createApp().use(ImagePreview)
```

### 局部引入
```js
import { ImagePreview } from 'simples-ui'

// 局部注册
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
```

### 函数调用

### 基本使用

```js
ImagePreview('https://varlet.gitee.io/varlet-ui/cat.jpg')
```

### 处理回调函数
```js
const images = [
  'https://varlet.gitee.io/varlet-ui/cat.jpg',
  'https://varlet.gitee.io/varlet-ui/cat2.jpg'
]

ImagePreview({
  images,
  onChange(index) {
    console.log(index)
  }
})
```


## 组件使用

### 基本使用

```html
<simples-button
  type="warning"
  block
  @click="show = true"
>
  基本使用
</simples-button>
<simples-image-preview :images="images" v-model:show="show" />

<simples-button 
  type="warning" 
  block
  @click="currentShow = true"
>
  指定初始位置
</simples-button>
<simples-image-preview
  current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
  :images="images"
  v-model:show="currentShow" 
/>

<simples-button 
  type="warning" 
  block 
  @click="closeShow = true"
>
```

```javascript
import { ref } from 'vue'
import { Snackbar } from 'simples-ui'

export default {
  setup() {
    const show = ref(false)
    const currentShow = ref(false)
    const closeShow = ref(false)
    const closeEventShow = ref(false)
    const images = ref([
      'https://varlet.gitee.io/varlet-ui/cat.jpg',
      'https://varlet.gitee.io/varlet-ui/cat2.jpg',
    ])

    const handleCloseEvent = () => Snackbar('触发了关闭事件。')
    
    return {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      images,
      handleCloseEvent,
    }
  },
}
```


## API

### 属性

| 参数         | 说明   | 类型  | 默认值  |
| ------------ | ------------ | ------------------ | ------------ |
| `show`       | 是否显示     | _boolean_ | `false` |
| `images`     | 需要预览的图片 URL数组 | _string[]_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数 | _string \| number_ | `2` |
| `closeable`  | 是否显示关闭按钮 | _boolean_ | `false` |


### ImagePreview Options

| 参数   | 说明  |  类型  | 默认值 |
| ------ | ----------- | ------ | -------- |
| `images`     | 需要预览的图片URL数组或者单个图片的url  | _string[] \| string_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数  | _string \| number_ | `2` |

