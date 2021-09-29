module.exports = {
  name: "Simples",
  namespace: "simples",
  host: '0.0.0.0',
  port: 8080,
  title: "Simples",
  logo: "https://www.runoob.com/wp-content/uploads/2017/01/vue.png",
  useMobile: false,
  pc: {
    redirect: "/home",
    title: {
      "zh-CN": "Simpls 面向Vue3的组件库",
      "en-US": "PC components built for Vue3"
    },
    header: {
      "i18n": {
        "zh-CN": "中文",
        "en-US": "English"
      },
      github: "https://github.com/sdhushu/simples-ui"
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '快速开始',
          'en-US': 'Quickstart',
        },
        doc: 'quickstart',
        type: 3,
      },
      {
        text: {
          'zh-CN': '按需引入',
          'en-US': 'Import on demand',
        },
        doc: 'importOnDemand',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Cell 单元格',
          'en-US': 'Cell',
        },
        doc: 'cell',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Image 图片',
          'en-US': 'Image',
        },
        doc: 'image',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Loading 加载',
          'en-US': 'Loading',
        },
        doc: 'loading',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Chip 纸片',
          'en-US': 'Chip',
        },
        doc: 'chip',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Badge 徽标',
          'en-US': 'Badge',
        },
        doc: 'badge',
        type: 2,
      },
      {
        text: {
          'zh-CN': '展示组件',
          'en-US': 'Display Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Skeleton 骨架屏',
          'en-US': 'Skeleton',
        },
        doc: 'skeleton',
        type: 2,
      },
     
      {
        text: {
          'zh-CN': 'ImagePreview 图片预览',
          'en-US': 'ImagePreview',
        },
        doc: 'image-preview',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Card 卡片',
          'en-US': 'Card',
        },
        doc: 'card',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Divider 分割线',
          'en-US': 'Divider',
        },
        doc: 'divider',
        type: 2,
      },
      {
        text: {
          'zh-CN': '导航组件',
          'en-US': 'Navigation Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Tabs 选项卡',
          'en-US': 'Tabs',
        },
        doc: 'tabs',
        type: 2,
      },
      {
        text: {
          'zh-CN': '反馈组件',
          'en-US': 'Action Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Snackbar 消息条',
          'en-US': 'Snackbar',
        },
        doc: 'snackbar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Dialog 对话框',
          'en-US': 'Dialog',
        },
        doc: 'dialog',
        type: 2,
      },
      {
        text: {
          'zh-CN': '表单组件',
          'en-US': 'Form Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Input 输入框',
          'en-US': 'Input',
        },
        doc: 'input',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Switch 开关',
          'en-US': 'Switch',
        },
        doc: 'switch',
        type: 2,
      },
    ],
  },
  "mobile": {
    "redirect": "/home",
    "title": {
      "zh-CN": "Simpls 面向Vue3的组件库",
      "en-US": "PC components built for Vue3"
    },
    "header": {
      "i18n": {
        "zh-CN": "中文",
        "en-US": "English"
      }
    }
  },
  "themes": {
    "color-primary": "#41B883",
    "color-link": "#00c48f",
    "color-type": "#00c48f",
    "color-side-bar": "#41B883",
    "color-side-bar-active-background": "#cde6c7",
    "color-app-bar": "#41B883",
    "color-mobile-cell-hover": "#3a7afe",
    "color-mobile-cell-hover-background": "#3a7afe1a"
  }
}
