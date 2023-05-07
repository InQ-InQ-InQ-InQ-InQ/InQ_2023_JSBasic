function solution(array) {
    const frq = [];
    let frqVal = 0;
    let maxFrq = 0;
    array.forEach(el => {
        if (!frq[el]) frq[el] = 0; // 구글링 통해서 알아낸 코드
        frq[el]++;
        if (frq[el] > maxFrq) {
            frqVal = el;
            maxFrq = frq[el];
        }
        else if (frq[el] === maxFrq) frqVal = -1;
    });
    return frqVal;
}
