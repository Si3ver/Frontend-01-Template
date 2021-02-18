var a = {
  _default: 0,
  toString: function () {
    return ++ this._default
  }
}

if (a == 1 && a == 2) {
  console.log('You Win!')
}
