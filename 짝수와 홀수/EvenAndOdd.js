'use strict';

//나의 풀이
function solution(num){
  if(num % 2 === 0){
    return 'Even';
  }
  else{
    return 'Odd';
  }
}

//결과 확인 테스트
console.log(`결과: ${solution(5)}`);
console.log(`결과: ${solution(10)}`);


//다른 풀이
function solutionOther(num){
  return num % 2 === 0 ? "Even" : "Odd";
}

//결과 확인 테스트
console.log(`결과: ${solutionOther(7)}`);
console.log(`결과: ${solutionOther(14)}`);