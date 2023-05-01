function solution(array) {
    let answer = 0;
    let max = Math.max(...array);

    /테스트3
    if (array.length == 1){
        answer = 1;
    }

    //테스트2
    if (array.indexOf(max) != array.lastIndexOf(max)) {
        answer = -1;
    }

    return answer;

}