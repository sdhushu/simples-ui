import type { App } from 'vue'
import Snackbar from './Snackbar.vue'


Snackbar.install = function (app: App) {
  app.component(Snackbar.name,Snackbar)
}

export const _SnackbarComponent = Snackbar

export default Snackbar
