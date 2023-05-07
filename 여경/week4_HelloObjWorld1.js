export default class Person {
    constructor(name, age, stdNum, hobby, grade, birth) {
        this.name = name;
        this.age = age;
        this.stdNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.birth = birth;
    }

    editName(eName){
        this.name = eName;
    }

    editAge(eAge){
        this.age = eAge;
    }

    editStdNum(eStdNum){
        this.stdNum = eStdNum;
    }

    editHobby(eHobby){
        this.hobby = eHobby;
    }

    editGrade(eGrade){
        this.grade = eGrade;
    }

    editBirth(eBirth){
        this.birth = eBirth;
    }

   printAll(){
    for (const key in this) {
        console.log(key + '-' + this[key]);
    }
   }
};


 