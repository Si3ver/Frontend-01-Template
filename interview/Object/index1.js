// Object.create
// Object.assign(target, ...sources)  复制source当前对象上可枚举的属性 到 target

let obj = Object.create({a: 1}, {
  b: {
    value: 2,
    configurable: true,
    enumerable: false,
  },
  c: {
    value: 3,
    enumerable: true,
  }
})

console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, 'b'))
console.log(Object.getOwnPropertyDescriptor(obj, 'c'))

// delete obj.b

console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, 'b'))
console.log(Object.getOwnPropertyDescriptor(obj, 'c'))

let target = {b: 5}
Object.assign(target, obj)
console.log(target)
