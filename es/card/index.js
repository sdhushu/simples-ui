import Card from './Card.js'

Card.install = function (app) {
  app.component(Card.name, Card);
};

export var _CardComponent = Card;
export default Card;