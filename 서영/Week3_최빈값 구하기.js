function solution(array){
    const frequency={};  //빈도수 객체 선언 후 초기화
    array.forEach(value=>{    //배열의 속성값이 함수를 한번씩 모두 실행할때까지 진행- 각 값에 대한 빈도수 계산
        if(!frequency[value]){   //객체의 속성값이 없을 때(빈도수가 없다면)
            frequency[value] =1;
        }
        else{    //객체의 속성값이 있을 때(빈도수가 있다면)
            frequency[value]++;
        }
    })
    //빈도수끼리의 값 비교
    const maxValue={}; //최빈값 변수 선언 후 초기화
    const maxFrequency=1; //가장 큰 빈도수 나타내는 변수 선언 후 초기값 0으로 지정
    for(const[value,count]of Object.entries(frequency)){ //각 value와 그에 대한 frequency 객체의 속성값 count를 배열로 나열
    if(count>maxFrequency){  //최빈값을 갖는 수가 하나 있을 때 그 수를 반환
        maxFrequency=count;
        maxValue=value;
        return maxValue;
    }
    else{  //최빈값을 갖는 수가 여러 개 있을 때 -1 반환
        return -1;
    }
}
}