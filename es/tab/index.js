import Tab from './Tab.js'

Tab.install = function (app) {
  app.component(Tab.name, Tab);
};

export var _TabComponent = Tab;
export default Tab;