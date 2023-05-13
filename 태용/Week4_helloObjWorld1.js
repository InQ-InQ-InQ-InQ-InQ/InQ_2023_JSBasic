class Person {
    constructor(name, age, stdNum, hobby, grade, gender) {
        this.name = name;
        this.age = age;
        this.stdNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.gender = gender;
    }

    editName(newName) {
        this.name = newName;
    }

    editAge(newAge) {
        this.age = newAge;
    }

    editstdNum(newStdNum) {
        this.stdNum = newStdNum;
    }

    editHobby(newHobby) {
        this.hobby = newHobby;
    }

    editGrade(newGrade) {
        this.grade = newGrade;
    }

    editGender(newGender) {
        this.gender = newGender;
    }

    printAll() {
        for(const property in this) {
            console.log(property + ' : ' + this[property]);
        }
    }
}

export { Person };
