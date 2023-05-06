function solution(array) {
    // 현재 검사하는 index의 element와 바로 다음 차례의 index에 오는 element가 다르면 새로 생성한 배열에 추가하도록 함.
    return array.filter((element, index) => element != array[index+1]); 
}
