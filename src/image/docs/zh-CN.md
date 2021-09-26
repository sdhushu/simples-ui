# 图片

### 介绍

组件提供了更方便的尺寸，圆角的设置方式

### 引入

```js
import { createApp } from 'vue'
import { Image } from 'simples-ui'

createApp().use(Image)
```

### 基本使用

```html
<simples-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 填充模式

```html
<simples-image width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

<simples-image 
  width="85px" 
  height="85px"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
/>

<simples-image 
  width="85px"
  height="85px" 
  src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
/>

<simples-image 
  width="85px"
  height="85px"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>

<simples-image 
  width="85px"
  height="85px" 
  src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
/>
```

### 设置圆角

```html
<simples-image
  width="85px"
  height="85px"
  :radius="10"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>

<simples-image
  width="85px"
  height="85px"
  radius="50%"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>
```


### 使用本地路径
在`.vue`文件中,`Vue组件`不会如同原生img一样被构建工具自动处理模块请求，所以需要手动导入图片资源。
下面是不同构建工具的使用方式。


#### Webpack

```html
<simples-image :src="require('../../assets/logo.png')"/>
```

#### Vite
```html
<simples-image :src="logo"/>
```

```js
import logo from '../../assets/logo.png'

export default {
  setup() {
    return { logo }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `src` | 图片地址 | _string_ | `-` |
| `alt` | 替代文本 | _string_ | `-` |
| `width` | 图片宽度 | _string \| number_ | `-` |
| `height` | 图片高度 | _string \| number_ | `-` |
| `radius` | 图片圆角 | _string \| number_ | `-` |
| `block` | 是否是块级元素 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图片时触发 | `event: Event` |
