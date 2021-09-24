import  { App } from 'vue'
import TabItem from './TabItem.vue'

TabItem.install = function (App) {
    App.component(TabItem.name, TabItem)
}

export const _TabItemComponent = TabItem

export default TabItem
