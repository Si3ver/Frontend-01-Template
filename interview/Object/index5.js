// 重写：Object.entries
// console.log(Object.entries({a: 1}))

Object.myEntries = function(o) {
  const _pool = []
  if (Object.prototype.toString.call(o) === '[object Object]') {
    for(let k in o) {
      if (o.hasOwnProperty(k)) {
        _pool.push([k, o[k]])
      }
    }
  }
  return _pool
}

// ---- test case ----
const obj = {
  a: 1,
  b: 2,
}

Object.prototype.c = 1

const res = Object.myEntries(obj)

console.log(res)
