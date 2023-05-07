function solution(arr){
    const answer = [];
    arr.forEach((number, index, array)=>{
        if (array[index] != array[index +1]){
            answer.push(number);
        };
    });
    
    return answer;
}