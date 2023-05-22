function solution(array) {
    const mode = new Map(); //맵 객체를 사용하겠다.

    array.forEach((num) => { //forEach문으로 배열순회
        if(mode.has(num)) {//이미 존재하는 key(num)이면,
            mode.set(num, mode.get(num, 1) + 1 );//해당 value값 1증가시킨다.
        } else {//존재하지 않으면
            mode.set(num, 1);//새로운 key-value 추가
        }
    });

    const max = Math.max(...mode.values());//Math.max()메서드 사용해서 가장 큰값 찾기
    const answer = Array.from(mode).filter(item => item[1] === max);//anwser에 저장하기

    return (answer.length > 1) ? -1 : answer[0][0];
}
//프로그래머스 lani님의 풀이를 참고하여 작성하였습니다.
