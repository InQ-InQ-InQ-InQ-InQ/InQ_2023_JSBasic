function solution(my_string) {
    let answer = '';
    for(let i=my_string.length-1;i>-1;i--){
        answer+=my_string[i];
    }
    
    return answer;
}