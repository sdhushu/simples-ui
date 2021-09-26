# 分割线

### 介绍
用于分隔列表或布局的各个部分。

### 引入

```js
import { createApp } from 'vue'
import { Divider } from 'simples-ui'

createApp().use(Divider)
```

### 基本使用
```js
<simples-divider />
```

### 虚线
```js
<simples-divider dashed />
```

### 缩进
```js
<simples-divider inset />
<simples-divider :inset="36" margin="36px 0" />
<simples-divider inset="-36px" />
```

### 垂直分割线
```js
<span>文字</span>
<simples-divider vertical />
<span>文字</span>
<simples-divider vertical />
<span>文字</span>
```

### 带有文字描述的分割线
```js
<simples-divider description="文字描述" />
```



## API

### 属性
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| inset | 设置缩进距离，正负号可控制缩进方向。当传递`true`时默认缩进为`72px` | _boolean \| number \| string_ | `false` |
| vertical | 是否垂直 | _boolean_ | `false` |
| dashed | 虚线 | _boolean_ | `false` |
| description | 分割线的文字描述 | _string_ | `-` |

### 插槽
| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义分割线文字描述内容 | `-` |
