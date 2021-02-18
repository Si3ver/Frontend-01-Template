var _default = 0
Object.defineProperty(window, 'a', {
  get () {
    return ++_default
  }
})

if (a === 1 && a === 2) {
  console.log('You Win!')
}
console.log(_default)
