// const obj = {x: 6.5, y: 4.2}
// makeCalculation(obj)

function makeCalculation({x, y: d, z = 4}) {
    return Math.floor((x + d + z) / 3)
  }

  // same thing
  function makeCalculation(obj) {
    const {x, y: d, z = 4} = obj
    return Math.floor((x + d + z) / 3)
  }

// also be written
function makeCalculation(obj) {
    const x = obj.x
    const d = obj.y
    const z = obj.z === undefined ? 4 : obj.z
    return
}
  
