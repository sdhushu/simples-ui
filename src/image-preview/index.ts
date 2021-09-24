import ImagePreview from './ImagePreview.vue'
import type { App } from 'vue'

ImagePreview.install = function (app: App) {
  app.component(ImagePreview.name, ImagePreview)
}


export const _ImagePreviewComponent = ImagePreview

export default ImagePreview
