import Switch from './Switch.js'

Switch.install = function (app) {
  app.component(Switch.name, Switch);
};

export var _SwitchComponent = Switch;
export default Switch;