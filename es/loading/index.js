import Loading from './Loading.js'

Loading.install = function (app) {
  app.component(Loading.name, Loading);
};

export var _LoadingComponent = Loading;
export default Loading;