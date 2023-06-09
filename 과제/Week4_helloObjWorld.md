# Week4_HelloObjWorld

### 📝 About Project
- 제출 파일 : Week4_helloObjWorld1.js, Week4_helloObjWorld2.js

  객체를 충분히 학습하셨나요? 그렇다면 객체를 직접 만들고 수정해봅시다!
  작성된 코드를 통해서 만들어진 객체가 정상적으로 동작하는지 테스트 할 예정입니다.

  ---

### 🚀 Subject

- 과제 프로토타입

    ```js
    class Person {
        // 작성 부분
    }
    ```
  ```js
  const Person = {
      // 작성 부분
  }
  ```

- 이번 과제에서 여러분들은 두가지 형태의 객체 생성법을 다뤄볼 수 있을겁니다
- 해당 문제는 클래스를 사용한 객체 로직 / 객체 리터럴을 사용한 객체 로직, 총 두가지의 코드를 제출하셔야 합니다.
- 객체 리터럴 방식으로 생성하는 경우, 값의 초기화를 위해 `initialize` 라는 이름의 메서드를 생성하세요.
- 클래스의 경우, 반드시 객체가 생성될 때 값이 초기화되어야합니다.
- 객체는 반드시 이름(`name`), 나이(`age`), 학번(`stdNum`), 취미(`hobby`), 학년(`grade`), 그리고 추가적인 속성 하나를 더 가져야합니다. 추가적인 속성은 개인 자유입니다.
- 객체를 생성하고나서 반드시 값은 수정될 수 있어야 하며, 이는 객체 내부 메소드를 통해서 구현되어야합니다. 이 때 메소드의 이름은 반드시 `editPropertyName` 형식이어야 합니다.
- 객체가 가진 값들을 모두 출력하는 기능을 구현해야합니다. 이 때 메소드의 이름은 `printAll` 로 작성하시면 됩니다.
- PropertyName은 속성 이름 넣으라는겁니다. ex) editName
- 변수나 함수등의 명명을 위해서 어떠한 표기법이 존재하는지 알아보시면 더욱 효과적인 학습이 될 수 있습니다.
- 생성된 로직은 반드시 **모듈화**하셔야합니다. (Common JS, ES6 방법 모두 가능)
---

- 평가할 때 여러분들의 객체는 다음과 같이 로드됩니다.

    ```js
    import Person from "path" // via ES6
    const Person = require("path") // via Common JS
    ```

- 객체는 다음과 같이 생성할 예정입니다. 객체 리터럴의 경우는 별도로 생성하지 않습니다.
   ```js
  const me = new Person(myName, myAge, myStdNum, myHobby, myGrade, myProperty); // via Class
  Person.initialize(myName, myAge, myStdNum, myHobby, myGrade, myProperty); // via literal
  ```

---

### ✅ Tips

- 모르면 물어보세요 ^^b
- **제출 기한 2023/05/07 23:59 까지의 PR분에 한하여 제출 인정**
