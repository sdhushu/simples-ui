import Button from './Button.js'

Button.install = function (app) {
  app.component(Button.name, Button);
};

export var _ButtonComponent = Button;
export default Button;