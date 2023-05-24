# Task1
name이 원래는 전역변수로 John이 선언되었지만, 이후 함수를 호출하기 전에 Pete로 update되었다.
이문제에서 function sayHi에서의 name은 전역변수 name이 출력되어야 하는데, 여기서 name은 
바뀐 name이 출력된다.
그래서 <strong>Pete</strong>이 출력된다.

==========================================
# Task2
work 변수를 보았더니, makeWorker() 함수를 호출하였다. 
그래서 makeWorker함수를 보니, 지역변수로 name이 Pete가 선언되었다. 그래서 name을 출력하였다.
여기서의 name은 전역변수 John이 아닌, 지역변수인 <strong>Pete</strong>이 출력되어야 한다.
함수안에서 name이 출력되는데 함수안에 name이 선언되어있기 때문이다.

==========================================
# Task 3
counter와 counter2는 서로 독립적이다. 그래서 counter2는 각각 <strong>0 1</strong> 출력된다.
그 이유는 counter와 counter2는 서로 다른 변수이기 때문이다. 그래서 서로 함수를 따로 호출한다.
counter2는 처음에 지역변수 count의 초기값을 출력하고, 두번째 출력할때는 0에서 1을 증가시킨 값을 출력한다.
