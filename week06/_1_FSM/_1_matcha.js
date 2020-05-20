function match(string){
  for(let c of string){
    if(c === 'a'){
      return true;
    }
  }
  return false;
}

console.log(match('cba')); // 查找字符串中是否含有 a
console.log(match('def'));
