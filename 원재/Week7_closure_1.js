function sum(a) {
    return function(b) {
        return a + b;
    };
}

alert(sum(1)(2)) = 3;
alert(sum(5)(-1)) = 4;
