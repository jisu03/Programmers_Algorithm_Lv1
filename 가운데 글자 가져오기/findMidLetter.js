'use strict';

//나의 풀이
function solution(s){
  let a = Math.floor(s.length / 2);
  if(s.length % 2 ===0){
    return s.substring(a-1, a+1);
  } else{
    return s.substring(a, a+1);
  }
}

//다른 풀이
function solutionOther(s){
  let b = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(b, 1)
}

console.log(`결과: ${solutionOther('waka')}`);
console.log(`결과: ${solutionOther('chaka')}`);
