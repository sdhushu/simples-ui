import Dialog from './Dialog.vue'
import { App } from 'vue'

Dialog.install = function (app: App) {
  app.component(Dialog.name, Dialog)
}

export const _DialogComponent = Dialog

export default Dialog
