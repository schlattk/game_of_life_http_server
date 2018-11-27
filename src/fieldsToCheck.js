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
    let length = grid.length - 1;
    let rep = function (y) {
      let result;
      if (y < 0){ result = length }
      else if (y > length){ result = 0 }
      else { result = y }
      return result
    };
    let fields = [grid[x][rep(y-1)], grid[x][rep(y+1)]];
    grid[x-1] ? fields.push(grid[x-1][y], grid[x-1][rep(y-1)], grid[x-1][rep(y+1)]) : fields.push(grid[x+length][y], grid[x+length][rep(y-1)], grid[x+length][rep(y+1)]);
    grid[x+1] ? fields.push(grid[x+1][y], grid[x+1][rep(y+1)], grid[x+1][rep(y-1)]) : fields.push(grid[x-length][y], grid[x-length][rep(y+1)], grid[x-length][rep(y-1)]);
    return fields
  };
  return { fields :checkFields }
})();
