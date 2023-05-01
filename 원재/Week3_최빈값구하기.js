function solution(array) {
    // map 이라는 이름의 새로운 map 객체 생성
    let map = new Map();

    // map 객체 0으로 초기화
    for(let i = 0; i <= Math.max(...array); i++){
        map.set(i, 0);    
    }

    // 입력받은 배열 array의 값과 일치하는 map 객체의 key 값을 1만큼 증가 (해당 값이 등장하는 빈도 확인)
    for(let i = 0; i < array.length; i++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    // map 객체의 value 값만 모아서 새로운 배열 생성
    let arr = Array.from(map.values());
    
    // 최빈값을 찾아서 따로 저장
    let max = Math.max(...arr);
    
    // 최빈값이 하나만 있다면 해당하는 최빈값을 출력, 최빈값이 여러 개라면 -1 출력 (문제 조건)
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1;
    } else {
        return arr.indexOf(max);
    }
}
