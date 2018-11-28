'use strict'
//Commented out method can be used for a field that ends at the edges
// const fieldsToCheck = (function () {
//   let checkFields = function (grid, x, y) {
//     let fields = [grid[x][y-1], grid[x][y+1]];
//     if (grid[x-1]){ fields.push(grid[x-1][y], grid[x-1][y-1], grid[x-1][y+1]) };
//     if (grid[x+1]){ fields.push(grid[x+1][y], grid[x+1][y+1], grid[x+1][y-1]) };
//     return fields;
//   };
//   return { fields :checkFields }
// })();

const fieldsToCheck = (function () {
  let checkFields = function (grid, x, y) {
    let len = grid.length - 1;
    let fields = [grid[x][rep(y-1, len)], grid[x][rep(y+1, len)]];
    grid[x-1] ? fields.push(grid[x-1][y], grid[x-1][rep(y-1, len)], grid[x-1][rep(y+1, len)]) : fields.push(grid[x+len][y], grid[x+len][rep(y-1, len)], grid[x+len][rep(y+1, len)]);
    grid[x+1] ? fields.push(grid[x+1][y], grid[x+1][rep(y+1, len)], grid[x+1][rep(y-1, len)]) : fields.push(grid[x-len][y], grid[x-len][rep(y+1, len)], grid[x-len][rep(y-1, len)]);
    return fields
  };
  return { fields :checkFields }
})();
