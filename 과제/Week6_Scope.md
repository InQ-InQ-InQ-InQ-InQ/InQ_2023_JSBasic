# Week6_Scope

### 📝 About Project
- 제출 파일 : Week6_scopeAnswer.md

변수의 유효범위에 대해서 공부를 해보는 시간을 가져보겠습니다.
이번주는 코딩 문제가 아닌, 일종의 문제풀이이기때문에 답을 잘 고민해보시길바랍니다!

  ---

### 🚀 Subject

### 1. Does a function pickup latest changes?
The function sayHi uses an external variable name. When the function runs, which value is it going to use?

```js
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
```

### 2. Which variables are available?
The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.
Will it have access to the outer variables from its creation place, or the invocation place, or both?

```js
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
```

### 3. counter는 독립적일까요?
`makeCounter`를 사용해 두 개의 conuter `counter`와 `counter2`를 만들었습니다.

두 counter는 독립적일까요? 두 번째 카운터는 0, 1이나 2, 3중 어떤 숫자를 얼럿창에 띄워줄까요? 다른 결과가 출력될까요?

```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
```
- 해당 문제에 대한 답 뿐만 아니라, 그러한 답이 나온 이유에 대해서도 서술해야합니다.
- 파일은 반드시 .md 확장자여야하며, 마크다운 문법을 사용하여 각 답과 그 이유를 작성하셔야합니다.
- 따라서, 이번 기회에 마크다운 문법 또한 익혀보시길 바랍니다!

---

### ✅ Tips

- 모르면 물어보세요 ^^b
- **제출 기한 2023/05/15 11:59 까지의 PR분에 한하여 제출 인정**