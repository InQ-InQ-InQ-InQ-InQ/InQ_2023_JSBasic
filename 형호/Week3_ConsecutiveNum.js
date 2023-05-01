function solution(arr) {
    var answer = [];
    arr.forEach(function (val, num, arr) {
        if (val !== arr[num - 1]) {
            answer.push(val);
        }
    });
    return answer;
}
