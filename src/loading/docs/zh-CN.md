# Loading 加载

### 引入

```js
import { createApp } from 'vue'
import { Loading } from 'simples-ui'

createApp().use(Loading)
```

### Loading 基本使用

```vue
import initLoading from '../example/initLoading.vue'
```

```html
<simples-loading type="circle" />
<simples-loading type="cube" />
<simples-loading type="wave" />
<simples-loading type="rect" />
<simples-loading type="disappear" />
```

### Loading 自定义颜色
```vue
import colorLoading from '../example/colorLoading.vue'
```

```html
<simples-loading type="circle" style="color: #2979ff" />
<simples-loading type="cube"  style="color: #2979ff"/>
<simples-loading type="wave" style="color: #2979ff" />
<simples-loading type="rect" style="color: #2979ff" />
<simples-loading type="disappear" style="color: #2979ff" />
```

### Loading 自定义尺寸
```vue
import sizeLoading from '../example/sizeLoading.vue'
```

```html
  <simples-loading type="rect" color=" #2979ff" width="80px"  height="90px"/>
  <simples-loading type="disappear" color=" #2979ff" width="120px"  height="100px"/>
```

## API

### 属性

| 参数    | 说明                                                               | 类型     | 默认值         |
| ------- | ------------------------------------------------------------------ | -------- | -------------- |
| `color` | loading 的颜色                                                     | _string_ | `currentColor` |
| `type`  | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle`       |
| `size`  | loading 的大小，可选值位 `large` `normal` `small` `mini`           | _string_ | `normal`       |
