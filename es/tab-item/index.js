import TabItem from './TabItem.js'

TabItem.install = function (app) {
  app.component(TabItem.name, TabItem);
};

export var _TabItemComponent = TabItem;
export default TabItem;