class Person {
    constructor(name, age, stdNum, hobby, grade, birth) {
        this.name = name;
        this.age = age;
        this.stdNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.birth = birth;
    }

    editName(name) {
        this.name = name;
    }

    editAge(age) {
        this.age = age;
    }

    editstdNum(stdNum) {
        this.stdNum = stdNum;
    }

    editHobby(hobby) {
        this.hobby = hobby;
    }

    editGrade(grade) {
        this.grade = grade;
    }

    editGender(birth) {
        this.birth = birth;
    }

    printAll() {
        console.log(this);
      }
    
}
