function solution(array, n) {
    let answer = 0;
    for (i=0; i<array.length; i++) {
        if (array[i] == n) {
            answer = answer +1;
        }
    }
    return answer;
}