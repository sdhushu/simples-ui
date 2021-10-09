# 输入框

### 引入

```js
import { createApp } from 'vue'
import { Input } from 'simples-ui'

createApp().use(Input)
```

### 基本使用
```vue
import mainInput from '../example/mainInput.vue'
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')

    return { value }
  }
}
```

```html
<simples-input placeholder="请输入文本" v-model="value" />
```

### 朴素模式

如果只需要组件的基本功能，可以通过属性去除部分样式。

```vue
import plainInput from '../example/plainInput.vue'
```

```html
<simples-input 
  :hint="false" 
  :line="false" 
  placeholder="请输入文本"
  v-model="value"
/>
```

### 文本域
```vue
import areaInput from '../example/areaInput.vue'
```

```html
<simples-input placeholder="请输入文本" textarea v-model="value" />
```

### 最大长度
```vue
import maxInput from '../example/maxInput.vue'
```

```html
<simples-input placeholder="请输入文本" :maxlength="10" v-model="value" />
```

### 禁用
```vue
import disableInput from '../example/disableInput.vue'
```

```html
<simples-input placeholder="请输入文本" disabled v-model="value" />
```

### 只读
```vue
import readInput from '../example/readInput.vue'
```

```html
<simples-input placeholder="请输入文本" readonly v-model="value" />
```



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 绑定的值 | _string \| number_ | `-` |
| `placeholder` | 占位符 | _string_ | `-` |
| `type` | 输入框类型, 可选值为 `text` `password` | _string_ | `text` |
| `maxlength` | 最大长度 | _string \| number_ | `-` |
| `textarea` | 是否是文本域 | _boolean_ | `false` |  
| `rows` | 文本域的显示行数 | _string \| number_ | `8` |  
| `line` | 是否显示分割线 | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `resize` | 文本域是否可以拖动调整尺寸 | _boolean_ | `false` |

