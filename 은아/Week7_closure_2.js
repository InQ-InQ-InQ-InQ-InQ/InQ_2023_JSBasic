let arr = [1, 2, 3, 4, 5, 6, 7];
//`arr.filter(f)`는 함수 `f`의 반환 값을 `true`로 만드는 모든 요소를 배열로 반환해줍니다.
function inBetween(x,y) {
    return function (arr) {
        return arr >= x && arr <= y; 
    };
}

function inArray(answer) {
    return function (arr) {
        return answer.includes(arr);
    };
}

alert(arr.filter(inBetween(3,6)));
alert(arr.filter(inArray([1, 2, 10])))
