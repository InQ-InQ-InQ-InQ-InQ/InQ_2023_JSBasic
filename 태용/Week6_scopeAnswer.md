# Week6_Scope
> 1. Does a function pickup latest changes?
>> - 함수 `sayHi()`는 변수 `name`을 따르게 된다.
>> - 함수가 실행될 때, 변수 `name`의 제일 최근에 변경된 값이 "Pete"이므로 "Hi, Pete"를 alert 한다.
***
> 2. Which variables are available?
>> - `makeWorker()` 함수는 생성된 장소의 외부 변수에 접근할 수 있다. (It will have access to the outer variables from its creation place.)
>> - 따라서 `work()`를 실행하면 "Pete"를 alert 한다.
>> - 리턴된 함수는 **클로저(closure)** 로,  생성될 때 만들어진 스코프의 변수에 대한 참조를 유지한다. `makeWorker()` 함수 내부에서 생성된 함수는 `makeWorker()` 의 스코프에서 정의된 변수인 `name`에 접근하게 된다. 
***
> 3. counter는 독립적일까요?
>> - `counter`와 `counter2`는 독립적인 클로저이므로. 각각의 클로저는 따로 `count` 를 갖고 독립적으로 증가하게 된다.
>> - 그러므로 `counter2()`는 독립적인 클로저이므로 0이 출력되고, 재호출시 1이 출력된다. 따라서 0, 1이 출력된다.