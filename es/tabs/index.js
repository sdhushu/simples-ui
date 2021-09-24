import Tabs from './Tabs.js'

Tabs.install = function (app) {
  app.component(Tabs.name, Tabs);
};

export var _TabsComponent = Tabs;
export default Tabs;