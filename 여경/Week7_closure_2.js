function inBetween(a, b){
    return function (i) {
        return i >= a && i <= b;
    }
}

function inArray(arr){
    return function (i){
        return arr.includes(i);
    }
}
