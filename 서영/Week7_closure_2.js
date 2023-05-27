//함수를 이용해 원하는 값만 걸러내기

function inBetween(a,b){  //매개변수 a와 b 가짐
    return function(x){   //arr배열값 x에 저장
       if(x>=a&&x<=b){  //외부함수 inBetween의 매개변수 a와 b에 접근가능
        return x;  //a와 b사이에 있는 x값 반환
       }
    }
}
function inArray(arr){   //배열값 arr를 매개변수로 가짐
    return function(x){  
        return arr.includes(x); //외부함수 매개변수 arr를 가져와 x와 비교하여 동일하게 포함되는 값을 반환
    }
}

let arr=[1,2,3,4,5,6,7];
alert(arr.filter(inBetween(3,6)));
alert(arr.filter(inArray([1,2,10])));