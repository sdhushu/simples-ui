# 纸片

### 引入

```js
import { createApp } from 'vue'
import { Chip } from 'simples-ui'

createApp().use(Chip)
```

### 纸片类型

通过`type`属性设置纸片的类型。

```html
<simples-chip type="primary">主要纸片</simples-chip>
<simples-chip type="success">成功纸片</simples-chip>
<simples-chip type="danger">危险纸片</simples-chip>
<simples-chip type="warning">警告纸片</simples-chip>
<simples-chip type="info">信息纸片</simples-chip>
<simples-chip>默认纸片</simples-chip>
```

### 简单纸片

通过`plain`属性将纸片设置为简单纸片。

```html
<simples-chip plain type="primary">简单纸片</simples-chip>
```

### 非圆角纸片

通过把`round`属性设置为`false`来取消纸片的圆角样式。

```html
<simples-chip :round="false" type="primary">非圆角纸片</simples-chip>
```

### 纸片尺寸

通过`size`属性设置纸片的尺寸。

```html
<simples-chip size="large">大纸片</simples-chip>
<simples-chip>常规纸片</simples-chip>
<simples-chip size="small">小纸片</simples-chip>
<simples-chip size="mini">迷你纸片</simples-chip>
```

### 块级纸片

通过`block`属性将纸片设置为块级纸片。

```html
<simples-chip type="primary" block>块级纸片</simples-chip>
```

### 可关闭纸片

通过`closable`属性将纸片设置为可关闭纸片。

```html
<simples-chip closable v-if="show" @close="show = false">可关闭纸片</simples-chip>
<simples-chip
  closable
  v-if="show1"
  @close="show1 = false">
  自定义关闭图标
</simples-chip>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(true)
    const show1= ref(true)

    return { 
      show, 
      show1 
    }
  }
}
```

### 自定义颜色

通过`color`和`text-color`属性设置纸片颜色。

```html
<simples-chip color="#009688">纸片</simples-chip>
<simples-chip color="#009688" plain>纸片</simples-chip>
<simples-chip color="#faecd8" text-color="#e6a23c" plain>纸片</simples-chip>
<simples-chip color="#faecd8" text-color="#e6a23c">纸片</simples-chip>
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `type` | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | 尺寸， 可选值为 `normal` `mini` `small` `large` | _string_ | `normal` |
| `plain` | 是否为空心样式 | _boolean_ | `false` |
| `round` | 是否为圆角样式 | _boolean_ | `true` |
| `block` | 是否为块级样式 | _boolean_ | `false` |
| `closeable` | 是否为可关闭纸片 | _boolean_ | `false` |
| `close-name` | 自定义可关闭纸片的图标，必须在`closeable`为`true`的条件下才能用 | _string_ | `-` |
| `color` | 纸片颜色 | _string_ | `_` |
| `text-color` | 文本颜色，优先级高于`color`属性 | _string_ | `-` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 纸片内容 | `-` |
| `left` | 插入至纸片左侧的内容 | `-` |
| `right` | 插入至纸片右侧的内容 | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `close` | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用 | `event: Event`  |

