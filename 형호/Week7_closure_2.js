function inBetween(a, b) {
    return function (e) {
        return e >= a && e <= b;
    };
}
function inArray(arr) {
    return function (e) {
        return arr.includes(e);
    };
}
