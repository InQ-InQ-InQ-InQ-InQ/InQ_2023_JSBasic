*[홍서영 6주차 과제]*
<br>
#
1. Does a function pickup latest changes?<br><br>
문제 이해 : name변수는 전역변수로서 John이라는 값을 할당받았고 이후 Pete라는 값으로 재할당받았다. sayHi함수를 이용하여 name변수를 alert할 수 있다.<br><br>
문제 답 : 
```Javascript
sayHi(); // Pete
```
답 설명 : 함수 내에서 사용할 수 있는 변수의 범위는 외부와 내부에서 선언된 모든 변수를 적용한다. 전역변수 name을 반환하고 재할당받은 값인 Pete를 출력한다.
<br>

#
2. Which variables are available?<br><br>
문제 이해 : makeWorker함수는 지역변수로서 name에 Pete를 할당하였고 내부에서 name을 반환하는 함수를 만들었다. 이는 클로저함수로서 외부함수 makeWorker의 변수인 name을 선언하게 된다. 이후 함수 밖에서 전역변수로 name변수를 John으로 재할당하였다. work라는 함수를 만들어 makeWorker함수를 출력하도록 하였다.<br><br> 
문제 답 : 
```Javascript
work(); // Pete
```
답 설명 : 만들어진 함수 work를 반환하면 makeWorker함수가 출력되어 지역변수로서 Pete값을 할당받은 name변수가 alert된다. 클로저는 자신이 선언된 시점의 환경을 기억한다. <br>

#
3. counter는 독립적일까요?<br><br>
문제 이해 : makeCounter함수에서는 count변수를 지역변수로서 선언한 후 초기화하였고 count의 값을 1씩 증가하여 반환하도록 내부함수를 만들었다. 내부함수는 클로저로 외부함수 makeCounter의 변수인 count에 접근할 수 있게 된다. counter와 counter2라는 새로운 변수에 makeCounter함수를 넣어 해당 변수가 alert되면 함수가 호출되도록 설계되었다.<br><br>
문제 답 :  
```Javascript
alert( counter2() ); // 0
alert( counter2() ); // 1
```
답 설명 : 같은 makeCounter함수를 호출하도록 되었지만 다른 변수에 저장되어 호출되므로 counter와 counter2는 독립적으로 보게된다. 초기값으로 0을 갖고 그 이후로 1씩 증가하여 값을 갖게 된다.

