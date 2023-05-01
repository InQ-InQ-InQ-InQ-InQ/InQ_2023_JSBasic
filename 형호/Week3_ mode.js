function solution(array) {
    var answer = 0;
    let max = 0;
    const count = new Array(100).fill(0);
    array.sort((a, b) => a - b);
    console.log(array);
    array.forEach(function (val, num, arr) {
        count[val]++;
        if (count[val] > max) {
            max = count[val];
            answer = val;
        } else if (count[val] === max) {
            answer = -1;
        }
    });
    return answer;
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
