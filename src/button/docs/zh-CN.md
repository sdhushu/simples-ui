# 按钮

### 引入
```js
import { createApp } from 'vue'
import { Button } from 'simples-ui'

createApp().use(Button)
```


### 主题色按钮

```vue
import mainColor from '../example/mainColor.vue'
```

```html
  <simples-button>默认按钮</simples-button>
  <simples-button type="primary">主要按钮</simples-button>
  <simples-button type="info">信息按钮</simples-button>
  <simples-button type="success">成功按钮</simples-button>
  <simples-button type="warning">警告按钮</simples-button>
  <simples-button type="danger">危险按钮</simples-button>
```


### 文字按钮

```vue
import textColor from '../example/textColor.vue'
```

```html
  <simples-button text outline type="primary">外边框按钮</simples-button>
  <simples-button text type="primary">纯文字按钮</simples-button>
```

### 禁用状态

```html
  <simples-button disabled>禁用按钮</simples-button>
  <simples-button disabled text outline>禁用按钮</simples-button>
  <simples-button disabled text>禁用按钮</simples-button>
```

### 加载状态

```html
  <simples-button type="primary" loading-type="circle">加载状态</simples-button>
  <simples-button type="info" loading-type="rect">加载状态</simples-button>
  <simples-button type="success" loading-type="disappear"
    >加载状态</simples-button
  >
  <simples-button type="warning" loading-type="cube">加载状态</simples-button>
  <simples-button type="danger" loading-type="wave">加载状态</simples-button>
```

### 按钮尺寸

```html
  <simples-button type="primary">常规按钮</simples-button>
  <simples-button type="success" size="small">小型按钮</simples-button>
  <simples-button type="warning" size="mini">迷你按钮</simples-button>
  <simples-button type="danger" size="large">大型按钮</simples-button>
```

### 块级按钮

```html
  <simples-button block type="primary">块级按钮</simples-button>
```

### 自定义颜色

```html
  <simples-button color="#69dbaa" text-color="#eee">背景/文字</simples-button>
  <simples-button
    color="linear-gradient(to right, #69dbaa, #3a7afe)"
    text-color="#fff"
    >使用渐变</simples-button
  >
```

### 圆形按钮

```html
  <simples-button type="primary" round></simples-button>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `type` | 类型， 可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | 尺寸， 可选值为 `normal` `mini` `small` `large` | _string_ | `normal` |
| `loading` | 加载状态 | _boolean_ | `false` |  
| `loading-radius` | loading的半径，只作用于 `loading-type="circle"` 时 | _string \| number_ | `12` |
| `loading-type` | loading的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle` |
| `loading-size` | loading的尺寸，可选值为 `large` `normal` `small` `mini` 不作用于 `loading-type="circle"` 时 | _string_ | `normal` |
| `round` | 是否是圆形按钮 | _boolean_ | `false` | 
| `block` | 是否是块级元素 | _boolean_ | `false` | 
| `text` | 是否是文字按钮 | _boolean_ | `false` |
| `outline` | 是否使用外边框 | _boolean_ | `false` |
| `disabled` | 禁用状态 | _boolean_ | `false` |
| `ripple` | 是否使用水波纹 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `color` | 背景颜色 | _string_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发， 在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |
| `touchstart` | 触摸手指压下按钮时触发， 在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |
