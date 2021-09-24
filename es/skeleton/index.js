import Skeleton from './Skeleton.js'

Skeleton.install = function (app) {
  app.component(Skeleton.name, Skeleton);
};

export var _SkeletonComponent = Skeleton;
export default Skeleton;