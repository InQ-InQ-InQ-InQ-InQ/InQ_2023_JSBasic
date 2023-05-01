function solution(array, n) {
    let cnt = 0;
    array.forEach(num => {
        if (num === n) cnt++;
    });
    return cnt;
}