const Person = {
    name: "empty",
    age: 0,
    sdtNum: "empty",
    hobby: "empty",
    grade: 0,
    money: 0,

    initialize(name, age, stdNum, hobby, grade, money) {
        this.name = name;
        this.age = age;
        this.sdtNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.money = money;
    },

    editName(name) {
        this.name = name;
    },

    editAge(age) {
        this.age = age;
    },

    editSgtNum(sgtNum) {
        this.sgtNum = sgtNum;
    },

    editHobby(hobby) {
        this.hobby = hobby;
    },

    editGrade(grade) {
        this.grade = grade;
    },

    editMoney(money) {
        this.money = money;
    },

    printAll() {
        console.log(this);
    },
};