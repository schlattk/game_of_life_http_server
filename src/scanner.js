'use strict';
const scanner = ( function () {
  let scan = function (grid, x, y) {
    let fields = fieldsToCheck.fields(grid, x, y);
    return fields.filter(x => x === 'X').length
    };
  return { scan: scan }
})();
