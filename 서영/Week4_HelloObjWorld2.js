export class Person{ //export를 사용해 클래스 외부로 공개
    constructor(name, age, stdNum, hobby, grade, residence){ //값의 초기화
        this.name=name;
        this.age=age;
        this.stdNum=stdNum;
        this.hobby=hobby;
        this.grade=grade;
        this.residence=residence;
    }
    //속성값변경 메소드
    editName(name){
        this.name=name;
    }
    editAge(age){
        this.age=age;
    }
    editStdNum(stdNum){
        this.stdNum=stdNum;
    }
    editHobby(hobby){
        this.hobby=hobby;
    }
    editGrade(grade){
        this.grade=grade;
    }
    editResidence(residence){
        this.residence=residence;
    }
    
    //값 표출 메소드
    printAll(){
        for(const prop in this){ //for-in 사용하여 값 나열
        console.log(`${prop}:${this[prop]}`); //백틱리터럴 사용하여 문자열과 변수 함께 표기
        }
    }
}
