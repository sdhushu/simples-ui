import Image from './Image.js'

Image.install = function (app) {
  app.component(Image.name, Image);
};

export var _ImageComponent = Image;
export default Image;