#1
* Pete -> 마지막 외부 변수에 있는 값이 name 에 저장되어 출력됨. 그게 Pete.
#2
* Pete. work 는 makeWorker 함수에 의해서 만들어진거라서 makeWorker 함수 내부에 있는 name 변수에 저장된 값이 호출이 된다.
#3
* makeCounter 함수가 두개의 카운터를 만들지만, 두 개는 독립적이다. 그리고 makeCounter() 함수의 count 변수는 c언어의 static 변수처럼 활용되면서 카운터가 호출되면 0,1이 출력된다. 그 다음 카운터가 호출되면 두 개는 독립적이기 때문에 다시 0, 1이 출력된다.