// 写一个 UTF-8 Encoding 的函数
function encodeUTF(text) {
  return text.split('').map(ch => '\\u' + ch.charCodeAt(0) .toString(16)).join('')
}

console.log(encodeUTF('周伟林'))
