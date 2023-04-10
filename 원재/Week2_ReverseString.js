function solution(my_string) {
    // Array.from 을 이용하여 유사 배열 객체를 배열로 바꿈
    const array = Array.from(my_string);
    
    // my_string 의 각 문자를 저장한 배열을 reverse 한 뒤에 join 을 이용하여 문자열 형태로 합쳐서 return
    return array.reverse().join('');
}