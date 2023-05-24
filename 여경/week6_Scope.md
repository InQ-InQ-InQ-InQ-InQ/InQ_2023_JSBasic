# 1. sayHi()

<p>
sayHi()가 호출될 때, name의 최근값을 사용하여 "Hi, Pete"를 표시한다.
함수 sayHi()가 정의될 때, 주변 범위에서 정의된 변수인 name에 접근할 수 있다.
해당 코드에서 name 은 제일 처음 John이라는 값이 할당되지만 sayHi()가 호출되기 전,
name = "Pete" 라는 코드를 통해 name의 값은 Pete로 변경된다.
</p>


# 2. makeWorker()

<p>
makeWorker() 함수가 반환한 새로운 함수는 생성된 위치의 외부변수에 접근할 수 있다.
makeWorker() 함수 내에서 생성된 함수는 makeWorker() 함수 내부에서 선언된 name에 접근할 수 있다. 
따라서 work() 함수를 호출한다면, makeWorker() 함수 내에서 생성된 함수가 실행되며,
변수 name의 값인 Pete를 출력한다.
</p>


# 3. makeCounter()

<p>
두 counter 는 독립적이다. 그러므로 makeCounter()가 호출될 때마다 독립적인 count 변수를 가진다.
그러므로 counter() 호출은 count 변수를 0에서 1로 증가시키고 0반환, 1에서 2로 증가시키고 1반환한다.
마찬가지로 counter2() 호출도 count 변수를 0에서 1로 증가시키고 0반환, 1에서 2로
증가시키고 1반환한다.
</p>