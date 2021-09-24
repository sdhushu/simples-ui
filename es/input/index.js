import Input from './Input.js'

Input.install = function (app) {
  app.component(Input.name, Input);
};

export var _InputComponent = Input;
export default Input;