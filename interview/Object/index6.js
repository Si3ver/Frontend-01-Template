// Object.fromEntries

const obj = {
  a: 1,
  b: 2,
}
Object.prototype.c = 3

const e = Object.entries(obj)
const m = new Map(e)
const newObj1 = Object.fromEntries(e)
const newObj2 = Object.fromEntries(m)
console.log("🚀 ~ newObj1", newObj1)
console.log("🚀 ~ newObj2", newObj2)

// 实现 fromEntries
Object.myFromEntries = function (m) {
  const _obj = {}
  for (let [k, v] of m) {
    _obj[k] = v
  }
  return _obj
}

const newObj3 = Object.myFromEntries(e)
const newObj4 = Object.myFromEntries(m)
console.log("🚀 ~ newObj3", newObj3)
console.log("🚀 ~ newObj4", newObj4)
