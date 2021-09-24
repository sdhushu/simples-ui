import Dialog from './Dialog.js'

Dialog.install = function (app) {
  app.component(Dialog.name, Dialog);
};

export var _DialogComponent = Dialog;
export default Dialog;