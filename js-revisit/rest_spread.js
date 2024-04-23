const arr = [5, 6, 8, 4, 9]
Math.max(...arr)


const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
}
const obj2 = {
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'h from obj2',
  },
}
console.log({...obj1, ...obj2})


function add(first, ...rest) {
  return rest.reduce((sum, next) => sum + next, first)
}


