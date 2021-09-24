import { App } from 'vue'
import TabsItems from './TabsItems.vue'

TabsItems.install = function (App) {
  App.component(TabsItems.name, TabsItems)
}

export const _TabsItemsComponent = TabsItems

export default TabsItems
