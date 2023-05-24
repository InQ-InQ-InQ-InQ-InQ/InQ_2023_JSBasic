const Person = { //값의 초기화
    name: "",
    age:0,
    stdNum:0,
    hobby: "",
    grade:0,
    residence:"",

    initialize(name, age, stdNum, hobby, grade, residence){   
        this.name=name;
        this.age=age;
        this.stdNum=stdNum;
        this.hobby=hobby;
        this.grade=grade;
        this.residence=residence;
    },

    //속성값변경 메소드
    editName(name){
        this.name=name;
    },
    editAge(age){
        this.age=age;
    },
    editStdNum(stdNum){
        this.stdNum=stdNum;
    },
    editHobby(hobby){
        this.hobby=hobby;
    },
    editGrade(grade){
        this.grade=grade;
    },
    editResidence(residence){
        this.residence=residence;
    },
    
    //값 표출 메소드
    printAll(){
        for(prop in this){ //객체 순회 for-in 사용
        console.log(prop+":"+this[prop]);
        }
    }
}
export default Person;  //export default 사용으로 외부 공개
//export와 export default 모두 모듈을 외부로 공개할 때 사용한다
//둘의 차이점은 export는 named default로서 import할 때 export한 객체나 함수의 이름을 그대로 사용해야 함, 여러 개의 객체나 함수를 한꺼번에 보낼 수 있음
//export default는 개발자가 원하는 이름으로 import할 수 있음, 한 모듈에 하나씩만 쓸 수 있음 

