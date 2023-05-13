function solution(array, n) {
    // filter 를 이용하여 조건을 만족하는 값들만 따로 추출한 배열을 생성하고, 해당 배열의 길이를 return
    return array.filter(a => a === n).length;
}
