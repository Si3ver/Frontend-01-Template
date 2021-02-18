const v1 = 123
const v2 = '123'
const v3 = true
const v4 = function test () {}

const v5 = Object.assign({}, v1, v2, v3, v4)

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5) // {0: "1", 1: "2", 2: "3"}


const r1 = new Number(123)
const r2 = new String('123')
const r3 = new Boolean(true)
const r4 = new Function(v4)

const r5 = Object.assign({}, r1, r2, r3, r4)

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5) // {0: "1", 1: "2", 2: "3"}
