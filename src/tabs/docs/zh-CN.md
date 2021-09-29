# 选项卡组

### 介绍

使用`Tabs`、`Tab`实现选项卡组的切换。使用`TabsItems`、`TabItem`实现和选项卡组的视图联动。

### 引入
```vue
import example from '../example'
```

```js
import { createApp } from 'vue'
import { Tabs, Tab, TabsItems, TabItem } from 'simples-ui'

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
```

### 基本使用

```html
<simples-tabs v-model:active="active">
  <simples-tab>选项1</simples-tab>
  <simples-tab>选项2</simples-tab>
  <simples-tab>选项3</simples-tab>
</simples-tabs>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    return { active }
  }
}
```

### 具名选项卡

Tabs默认通过`active`去匹配Tab的`index`来决定哪个选项卡被激活。
您也可以通过给Tab设置`name`来命名选项卡，这时Tabs会优先匹配`name`。

```html
<simples-tabs v-model:active="active">
  <simples-tab name="选项1">选项1</simples-tab>
  <simples-tab name="选项2">选项2</simples-tab>
  <simples-tab name="选项3">选项3</simples-tab>
</simples-tabs>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref('选项1')

    return { active }
  }
}
```

### 修改样式

```html
 <simples-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <simples-tab>选项1</simples-tab>
  <simples-tab>选项2</simples-tab>
  <simples-tab>选项3</simples-tab>
</simples-tabs>
```

### 禁用选项

```html
<simples-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <simples-tab>选项1</simples-tab>
  <simples-tab>选项2</simples-tab>
  <simples-tab disabled>禁用选项</simples-tab>
</simples-tabs>
```



### 视图联动

```html
<simples-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <simples-tab>选项1</simples-tab>
  <simples-tab>选项2</simples-tab>
  <simples-tab>选项3</simples-tab>
</simples-tabs>

<simples-tabs-items v-model:active="active">
  <simples-tab-item>
    呜啦啦啦火车笛，随着奔腾的马蹄。
    小妹妹吹着口琴，夕阳下美了剪影。
    我用子弹写日记，介绍完了风景。
    接下来换介绍我自己。
    我虽然是个牛仔，在酒吧只点牛奶。
    为什么不喝啤酒，因为啤酒伤身体。
  </simples-tab-item>
  <simples-tab-item>
    很多人不长眼睛，嚣张都靠武器。
    赤手空拳就缩成蚂蚁。
    不用麻烦了，不用麻烦了。
    不用麻烦，不用麻烦了，不用麻烦了。
  </simples-tab-item>
  <simples-tab-item>
    你们一起上，我在赶时间。
    每天决斗观众都累了，英雄也累了。
    不用麻烦了，不用麻烦了。
    副歌不长你们有几个，一起上好了。
    正义呼唤我，美女需要我。
    牛仔很忙的。
  </simples-tab-item>
</simples-tabs-items>
```

## API

### 属性

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model:active` | 激活的选项卡标识, 优先匹配name，其次是index | _string_ | `default` |
| `layout-direction` | 选项卡组的布局方向， 可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| `item-direction` | 选项卡的布局方向，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| `fixed-bottom` | 是否固定在窗口底部, 可用做底部导航 | _boolean_ | `false` |
| `color` | 选项卡的背景颜色 | _string_ | `#fff` |
| `active-color` | 选项卡激活的主要颜色 | _string_ | `#2979ff` |
| `inactive-color` | 选项卡未激活的主要颜色 | _string_ | `#646566` |
| `disabled-color` | 选项卡禁用时的主要颜色 | _string_ | `#e0e0e0` |
| `indicator-color` | 选项卡激活指示器的颜色 | _string_ | `#2979ff` |
| `indicator-size` | 选项卡激活指示器的尺寸 | _string \| number_ | `2px` |
| `elevation` | 是否启用阴影 | _boolean_ | `false` |
| `sticky` | 是否启用粘性布局 | _boolean_ | `false` |
| `offset-top` | 吸顶距离 | _string \| number_ | `0` |


### Tab Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 选项卡的名字 | _string \| number_ | `index` |
| `disabled` | 是否禁用选项卡 | _boolean_ | `false` |

### TabsItems Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model:active` | 激活的选项卡的标识 | _string \| number_ | `-` |
| `can-swipe` | 是否允许滑动切换 | _boolean_ | `true` |
| `loop` | 是否允许循环切换 | _boolean_ | `false` |

### TabItem Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 视图的名字 | _string \| number_ | `index` |

