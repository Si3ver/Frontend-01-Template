function match(string){
  let foundA = false;
  for(let c of string){
    if(c === 'a'){
      foundA = true;
    }else if(foundA && c === 'b'){
      return true;
    }else{
      foundA = false; // 如果 a b 都没有找到， 重置状态
    }
  }
  return false;
}

console.log(match('abcacb'));
