// Object.entries

function Test () {
  this.a = 1
  this.b = 2
}

Test.prototype.c = 3

const test = new Test()
console.log("🚀 ~ test", test)

for(let k in test) {
  console.log(k, test[k])
}

for(let [k, v] of Object.entries(test)) {
  console.log("🚀 ~ k, v", k, v)
}


const obj = {}
Object.defineProperties(obj, {
  a: {
    value: 1,
    enumerable: true,
  },
  b: {
    value: 2,
    enumerable: true,
  },
})
console.log(Object.entries(obj))
console.log(new Map(Object.entries(obj)))
