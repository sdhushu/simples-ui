# Switch 开关

### 介绍

开关选择器。

### 引入

```js
import { createApp } from 'vue'
import { Switch } from 'simples-ui'

createApp().use(Switch)
```

### 基本使用

```html
<simples-switch v-model="value" />
```

```javascript
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(true)

    return {
      value
    }
  }
}
```

### 不可用

```html
<simples-switch v-model="value" disabled />
<simples-switch v-model="value" readonly />
```

### 自定义颜色

```html
<simples-switch v-model="value" :ripple="false" />
<simples-switch v-model="value" color="#ff9f00" close-color="#f5cb90" />
```

### 不同大小

通过`size`属性改变Switch大小。

```html
<simples-switch v-model="value" size="15" />
<simples-switch v-model="value" />
<simples-switch v-model="value" size="25" />
```



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model` | 开关选中状态	| _any_ | `false` |
| `active-value` | 开关打开时的值	| _any_ | `true` |
| `inactive-value` | 开关关闭时的值	| _any_ | `false` |
| `disabled` | 是否禁用| _boolean_ | `false` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `loading` | 是否为加载状态 | _boolean_ | `false` |
| `ripple` | 是否启用水波纹 | _boolean_ | `true` |
| `color` | 打开状态下的颜色 | _string_ | `#2979ff` |
| `loading-color` | 加载图标的颜色 | _string_ | `#fff` |
| `close-color` | 关闭状态下的颜色 | _string_ | `#fff` |
| `size` | switch的大小 | _string \| number_ | `20` |


### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击时触发 | `event: Event` |
| `change` | 开关状态切换时触发 | `value: any` |

