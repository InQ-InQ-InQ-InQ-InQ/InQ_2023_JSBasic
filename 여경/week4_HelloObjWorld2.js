const Person = {
    initialize(name, age, stdNum, hobby, grade, birth){
        this.name = name;
        this.age = age;
        this.stdNum = stdNum;
        this.hobby = hobby;
        this.grade = grade;
        this.birth = birth;
    },

    editName(eName){
        this.name = eName;
    },

    editAge(eAge){
        this.age = eAge;
    },

    editStdNum(eStdNum){
        this.stdNum = eStdNum;
    },

    editHobby(eHobby){
        this.hobby = eHobby;
    },

    editGrade(eGrade){
        this.grade = eGrade;
    },

    editBirth(eBirth){
        this.birth = eBirth;
    },

    printAll(){
        console.log(
            this.name, this.age, this.stdNum, this.hobby, this.grade, this.birth
        );
    }
};

export{Person};

/x/n