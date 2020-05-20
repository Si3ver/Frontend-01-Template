let arr1 = [{type: 1, content:'abc'}, {type: 2, content:'def'}, {type: 3, content:'ghi'}]
let arr2 = [{type: 1, content:'jkl'}, {type: 2, content:'mno'}]


arr1 = arr1.map(item => {
  for (let i = 0; i < arr2.length; ++i) {
    if (item.type === arr2[i].type) {
      return arr2[i]
    }
  }
  return item
})

console.log(arr1)
