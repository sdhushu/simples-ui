import Snackbar from './Snackbar.js'

Snackbar.install = function (app) {
  app.component(Snackbar.name, Snackbar);
};

export var _SnackbarComponent = Snackbar;
export default Snackbar;