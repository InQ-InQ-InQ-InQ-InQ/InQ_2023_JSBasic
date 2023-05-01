function solution(array) {
    let answer = 0;
    let test = 0;
    const arr = new Array(100).fill(0);
    array.forEach(function (val) {
        arr[val] += 1;
        if (arr[answer] === arr[val] && answer !== val) {
            test = -1;
        } else if (arr[val] > answer) {
            answer = val;
            test = 0;
        }
    });
    console.log("answer :" + answer + " test : " + test);
    return test === 0 ? answer : -1;
}

function solution(array) {
    var answer = 0;
    let max = 0;
    const count = [];
    array.sort((a, b) => a - b);
    console.log(array);
    array.forEach(function (val, num, arr) {
        if (count[val] === undefined) {
            count[val] = 1;
        } else {
            count[val]++;
        }

        if (count[val] > max) {
            max = count[val];
            answer = val;
        } else if (count[val] === max) {
            answer = -1;
        }
    });

    return answer;
}
