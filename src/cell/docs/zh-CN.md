# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```js
import { createApp } from 'vue'
import { Cell } from 'simples-ui'

createApp().use(Cell)
```

### 基本使用

```html
<simples-cell> 这是单元格 </simples-cell>
```


### 显示描述
```html
<simples-cell title="这是单元格" desc="描述" />
```

### 显示边框
```html
<simples-cell border> 这是单元格 </simples-cell>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `title` | 单元格标题	| _string \| number_ | `-` |
| `desc` | 单元格描述 | _string_ | `-` |
| `border` | 是否显示边框 | _boolean_ | `false` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | cell的内容 | `-` |
| `desc` | 描述的内容 | `-` |

