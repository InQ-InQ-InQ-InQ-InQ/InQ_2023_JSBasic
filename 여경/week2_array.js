function solution(array, n){
    let answer = 0;
   array.forEach(function(item){
     if(item === n){
       answer++;
     }
   })
    return answer;
  }