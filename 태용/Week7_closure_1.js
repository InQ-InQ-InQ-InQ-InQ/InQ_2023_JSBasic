function sum(a) {
    return function(b) {
        return a + b;
    }
}

/* 
해당 식을 화살표 함수를 사용해서 이렇게 표현 할수 있지 않을까? 라는 생각이 들었습니다
const sum = a => b => (a + b);
*/
