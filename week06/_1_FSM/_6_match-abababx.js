function start(c) {
  if (c === 'a')
    return findA1
  else
    return start
}

function end(c) {
  return end
}

function findA1(c) {
  if (c === 'b')
    return findB1
  else
    return start
}

function findB1(c) {
  if (c === 'a')
    return findA2
  else
    return start
}

function findA2(c) {
  if (c === 'b')
    return findB2
  else
    return start
}

function findB2(c) {
  if (c === 'a')
    return findA3
  else
    return start
}

function findA3(c) {
  if (c === 'b')
    return findB3
  else
    return start
}

function findB3(c) {
  if (c === 'x')
    return end
  else
    return findB2(c)
}

function match(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }
  return state === end
}

console.log(match('abababx'));
console.log(match('ababababx'));
console.log(match('abababab'));
