function sum(x) {
    return function(y) {
        return x+y;
    }
}
console.log(sum(1)(2));
console.log(sum(5)(-1));
/*클로저 중 IIFE 즉시호출 함수에 배워서 오늘도 하나 알아간 것 같아서 좋은 공부였습니다!*/