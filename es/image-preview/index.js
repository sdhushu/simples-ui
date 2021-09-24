import ImagePreview from './ImagePreview.js'

ImagePreview.install = function (app) {
  app.component(ImagePreview.name, ImagePreview);
};

export var _ImagePreviewComponent = ImagePreview;
export default ImagePreview;