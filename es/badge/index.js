import Badge from './Badge.js'

Badge.install = function (app) {
  app.component(Badge.name, Badge);
};

export var _BadgeComponent = Badge;
export default Badge;