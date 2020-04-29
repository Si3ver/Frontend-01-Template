// map: ch => val
const numberMap = new Map()
;[...new Array(10).keys()].forEach(k => {
  numberMap.set(`${k}`, k)
})
;[...new Array(26).keys()].forEach(k => {
  numberMap.set(String.fromCodePoint(97 + k), k + 10)
})

function convertStringToNumber (str, radix = 10) {
  let flag = 1
  if (['+', '-'].includes(str[0])) {
    str[0] === '-' && (flag = -1)
    str = str.substring(1)
  }
  const [integerPart, decimalPart] = str.split('.')
  const integerList = (integerPart || '').split('').map(ch => numberMap.get(ch.toLowerCase()))
  const decimalList = (decimalPart || '').split('').map(ch => numberMap.get(ch.toLowerCase()))

  // check if overflow radix
  if (!integerList.every(v => v < radix) || !decimalList.every(v => v < radix)) {
    return NaN
  }

  const integer = integerList.reduce((cur, val, idx, arr) => {
    return cur + val * (radix ** (arr.length - idx - 1))
  }, 0)
  const decimal = decimalList.reduce((cur, val, idx) => {
    return cur + val * (radix ** (-1 - idx))
  }, 0)
  return flag * (integer + decimal)
}

// test case
console.log(convertStringToNumber('-0', 2))
console.log(convertStringToNumber('0', 2))
console.log(convertStringToNumber('-1010.11', 2))
console.log(convertStringToNumber('+12012.2101', 3))
console.log(convertStringToNumber('fF.fe', 16))
console.log(convertStringToNumber('aaa.aaa', 12))
console.log(convertStringToNumber('aa.f', 15))
console.log(convertStringToNumber('aa.f', 16))
