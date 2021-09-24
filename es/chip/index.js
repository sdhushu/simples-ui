import Chip from './Chip.js'

Chip.install = function (app) {
  app.component(Chip.name, Chip);
};

export var _ChipComponent = Chip;
export default Chip;