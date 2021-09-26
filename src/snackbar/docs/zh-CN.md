# Snackbar 消息条

### 介绍

用于向用户显示快速消息。

### 引入

```js
import { createApp } from 'vue'
import { Snackbar } from 'simples-ui'

createApp().use(Snackbar)
```

### 局部引入

```js

import { Snackbar } from 'simples-ui'

export default {
  components: {
    [Snackbar.Component.name]: Snackbar
  }
}
```

### 组件调用

#### 基本使用

```html
<simples-button type="primary" block @click="show = !show">基本使用</simples-button>
<simples-snackbar v-model:show="show"> 这是一个消息条！！</simples-snackbar>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
}
```




#### 显示时长

通过`duration`属性改变`snackbar`显示时长。

```html
<simples-snackbar v-model:show="show" :duration="1000"> 这是一个消息条！！</simples-snackbar>
```


### 函数调用

#### 基本使用

```javascript
Snackbar('这是一个消息条！！')
```

#### 显示时长

```javascript
Snackbar({
 content: '这是一个消息条！！',
 duration: 1000
})
```

#### 底部显示

```javascript
Snackbar({
 content: '这是一个消息条！！',
 position: 'bottom'
})
```

### Snackbar 类型

```javascript
Snackbar.success('这是一个消息条！！')
Snackbar.warning('这是一个消息条！！')
Snackbar.info('这是一个消息条！！')
Snackbar.error('这是一个消息条！！')
Snackbar.loading('这是一个消息条！！')
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model:show` | 是否显示`Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar`类型，可选值为`success, warning, info, error, loading`之一 | _string_ | `-` |
| `position`| `Snackbar`位置，可选值为`top, center, bottom`之一 | _string_ | `top` |
| `duration`| 显示时长 | _number_ | `3000` |
| `content` | 自定义内容 | _string_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `open` | 	打开`Snackbar`时触发 | `-` |
| `opened` | 	打开`Snackbar`动画结束时触发 | `-` |
| `close` | 	关闭`Snackbar`时触发 | `-` |
| `closed` | 	关闭`Snackbar`动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `Snackbar` 内容 | `-` |
| `action` | `Snackbar` 右边动作区 | `-` |

### 方法

实例上的`clear`方法可关闭当前实例，全局`clear`方法可关闭所有的消息条。

| 方法名 | 说明 | 参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| `Snackbar` | 显示消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.success` | 显示成功消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.info` | 显示普通消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.warning` | 显示警告消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.error` | 显示错误消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.loading` | 显示加载消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.clear` | 关闭消息条 | _-_ | `-` |
| `Snackbar.allowMultiple` | 是否允许多例模式 | _boolean_ | `-` |

### Snackbar Options

#### 函数式调用时传入的选项

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `show` | 是否显示`Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar`类型，可选值为`success, warning, info, error, loading`之一 | _string_ | `-` |
| `position`| `Snackbar`位置，可选值为`top, center, bottom`之一 | _string_ | `top` |
| `duration`| 显示时长(当`type`属性为`loading`时，需要手动关闭) | _number_ | `3000` |
| `content` | 自定义内容 | _string_ | `-` |
| `contentClass` | 自定义内容的类名 | _string_ | `-` |
| `vertical` | 是否启用竖直排列方式 | _boolean_ | `false` |
| `loadingType` | 加载动画类型(见`Loading`组件) | _string_ | `circle` |
| `loadingSize` | 加载动画大小(见`Loading`组件) | _string_ | `normal` |
| `lockScroll`| 是否禁止滚动穿透 | _boolean_  | `false` |
| `forbidClick`| 是否禁止穿透点击(当`type`属性为`loading`时，默认为`true`) | _boolean_  | `false` |
| `onOpen` | 	打开`Snackbar`时触发 | _() => void_ | `-` |
| `onOpened` | 	打开`Snackbar`动画结束时触发 | _() => void_ | `-` |
| `onClose` | 	关闭`Snackbar`时触发 | _() => void_ | `-` |
| `onClosed` | 	关闭`Snackbar`动画结束时触发 | _() => void_ | `-` |

