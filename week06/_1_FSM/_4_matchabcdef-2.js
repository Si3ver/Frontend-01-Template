// 状态链写法！
function start(c) {
  if (c === 'a') {
    console.log('a pass!')
    return foundA;
  } else {
    return start
  }
}

function foundA(c) {
  if (c === 'b') {
    console.log('b pass!')
    return foundB;
  } else {
    return start
  }
}

function foundB(c) {
  if (c === 'c') {
    console.log('c pass!')
    return foundC;
  } else {
    return start
  }
}

function foundC(c) {
  if (c === 'd') {
    console.log('d pass!')
    return foundD;
  } else {
    return start
  }
}

function foundD(c) {
  if (c === 'e') {
    console.log('e pass!')
    return foundE;
  } else {
    return start
  }
}

function foundE(c) {
  if (c === 'f') {
    console.log('f pass!')
    return end;
  }
}

function end() {
  return end;
}

function match(string) {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

console.log(match('abcdefgd')); // 匹配是否有连续的 abcdef 字符串
console.log(match('abcddabcdefg'));
