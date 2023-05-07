class Person {
    constructor(name, age, stdNum, hobby, grade, major) {
        this.name = name;
        this.age = age;
        this.stdNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.major = major;
    }

    printAll() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.stdNum);
        console.log(this.hobby);
        console.log(this.grade);
        console.log(this.major);
    }

    editName(name) {
        this.name = name;
    }

    editAge(age) {
        this.age = age;
    }

    editStdNum(stdNum) {
        this.stdNum = stdNum;
    }

    editHobby(hobby) {
        this.hobby = hobby;
    }

    editGrade(grade) {
        this.grade = grade;
    }

    editMajor(major) {
        this.major = major;
    }
}

export default Person;
