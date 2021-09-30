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
```vue
import initImage from '../example/initImage.vue'
```

```html
<simples-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```


### 设置圆角
```vue
import roundImage from '../example/roundImage.vue'
```

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


### 自定义宽高
```vue
import whImage from '../example/whImage.vue'
```

```html
  <simples-img width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
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
