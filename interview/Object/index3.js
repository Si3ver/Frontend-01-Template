// 实现一个能拷贝访问器属性的 Object.assign


const source = {
  a: 1,
  get b () {
    return 2
  },
}

// const res = Object.assign({}, source)
// console.log(res)

Object.myAssign = function(target, ...sources) {
  sources.forEach(source => {
    const descriptors = Object.keys(source)
      .reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
        return descriptors
      }, {})
    Object.defineProperties(target, descriptors)
  })
  return target
}

const res2 = Object.myAssign({}, source)
console.log("🚀 ~ res2", res2)
