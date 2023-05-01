function solution(my_string) {
    let answer = "";
    my_string.split("").forEach(function (a) {
        answer = a + answer;
    });
    return answer;
}
