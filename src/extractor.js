const extractor = (function () {
  let extract = function () {
    let grid = document.getElementById('grid')
    let extractedArray = []
    let length = grid.getElementsByTagName('rect').length
    for (let i = 0; i < length; i++){
        if (grid.getElementsByTagName('rect')[i].className.baseVal === "red")
            { extractedArray.push("X") }
        else { extractedArray.push("O") }
    }
    return chunkArray(extractedArray, Math.pow(extractedArray.length, 0.5))
  }
  return {extract: extract}
})()
