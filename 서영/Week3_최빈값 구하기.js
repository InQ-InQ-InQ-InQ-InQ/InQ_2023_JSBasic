function solution(array) {
    let m = new Map();

    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}