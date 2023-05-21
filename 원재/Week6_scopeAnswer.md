Week6_scopeAnswer
===================

***

# 1

## 해답 
Pete

## 풀이
sayHi 함수는 함수의 외부에서 name 이라는 이름을 가진 변수를 불러오고, name으로 선언된 변수 중 가장 최근의 값을 사용하기 때문이다.

***

# 2

## 해답 
Pete

## 풀이 
makeWorker 함수의 내부에서 name 이라는 이름을 가진 변수에 Pete 라는 값이 선언되었고, 이는 함수 스코프로 지정이 되기 때문이다.

***

# 3

## 해답 
0 과 1

## 풀이 
Javascript는 렉시컬 스코프 (Lexical Scope)를 따르기 때문에 counter 함수와 counter2 함수는 독립적이며, 서로 다른 makeCounter 함수를 호출해서 생성된다. 따라서 counter 함수와 counter 2 함수는 서로 다른 count 를 가지게 된다.

