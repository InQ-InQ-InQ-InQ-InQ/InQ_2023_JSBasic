function solution(array) {
    let arr = new Map(); // map() 을 이용해서 각 값마다 갯수 샌다
    for(let i = 0; i < array.length; i++){
        arr.set(array[i], (arr.get(array[i])||0) + 1);
    }
    let max = Math.max(...[...arr].map(v => v[1])) //값중에서 제일 큰 값을 max
    let count = [...arr].filter(v => v[1] === max).length //최댓값 갯수를 count에다 넣음
    return count > 1 ? -1 : [...arr].find(v => v[1] === max)[0] //count에 있는 갯수가 1보다 많으면 -1, 아니면 max 값과 일치하는 인덱스 출력.
}