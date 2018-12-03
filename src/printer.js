'use strict';

const printer = (function () {
  let display = document.getElementById('grid');
  let print = function (grid) {
  display.innerHTML = '';
  grid.reverse().forEach((array) =>{ display.insertAdjacentHTML('afterbegin',array.join('') + '<br>') })
  }
  return { print: print }
})();
