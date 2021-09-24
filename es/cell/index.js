import Cell from './Cell.js'

Cell.install = function (app) {
  app.component(Cell.name, Cell);
};

export var _CellComponent = Cell;
export default Cell;