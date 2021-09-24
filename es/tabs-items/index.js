import TabsItems from './TabsItems.js'

TabsItems.install = function (app) {
  app.component(TabsItems.name, TabsItems);
};

export var _TabsItemsComponent = TabsItems;
export default TabsItems;