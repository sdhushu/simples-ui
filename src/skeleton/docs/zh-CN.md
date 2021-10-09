# 骨架屏

### 介绍
显示一些带过渡效果的占位元素，优化加载过程。

### 引入

```js
import { createApp } from 'vue'
import { Skeleton } from 'simples-ui'

createApp().use(Skeleton)
```

### 基本使用
```vue
import mainSkeleton from '../example/mainSkeleton.vue'
```

```html
<simples-skeleton :loading="loading">加载的数据</simples-skeleton>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(true)

    return { loading }
  }
}
```

### 显示标题
```vue
import titleSkeleton from '../example/titleSkeleton.vue'
```

```html
 <simples-skeleton title :loading="loading">加载的数据</simples-skeleton>
```

### 自定义段落高度
```vue
import sizeSkeleton from '../example/sizeSkeleton.vue'
```

```html
<simples-skeleton
  title
  :rows="3"
  :loading="loading"
  :rows-width="['200px', '100px', '50px']"
>
  加载的数据
</simples-skeleton>
```

### 显示头像
```vue
import avatarSkeleton from '../example/avatarSkeleton.vue'
```

```html
<simples-skeleton
  title
  avatar
  :rows="3"
  :loading="loading"
>
  加载的数据
</simples-skeleton>
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loading` | 加载状态，设置为 `true` 开启骨架屏 | _boolean_ | `true` |
| `title` | 是否显示标题 | _boolean_ | `false` |
| `avatar` | 是否显示头像 | _boolean_ | `false` |
| `title-width` | 标题宽度 | _string \| number_ | `50%` |
| `avatar-size` | 头像尺寸 | _string \| number_ | `34px` |
| `rows` | 段落行数 | _string \| number_ | `3` |
| `rows-width` | 段落每一行的宽度 | _number[] \| string[]_ | `['12px', '12px', '12px']` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 加载成功后显示的内容 | `-` |
