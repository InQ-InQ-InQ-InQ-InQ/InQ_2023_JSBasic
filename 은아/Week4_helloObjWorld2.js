//객체 리터럴로 작성하기
const Person = {
    name: '',
    age: '',
    stdNum: '',
    hobby: '',
    grade: '',
    address: '',
  
    //초기화
    initialize(name, age, stdNum, hobby, grade, address) {
      this.name = name;
      this.age = age;
      this.stdNum = stdNum;
      this.hobby = hobby;
      this.grade = grade;
      this.address = address;
    },
  
    editName(name) {
      this.name = name;
    },
  
    editAge(age) {
      this.age = age;
    },
  
    editStdNum(stdNum) {
      this.stdNum = stdNum;
    },
  
    editHobby(hobby) {
      this.hobby = hobby;
    },
  
    editGrade(grade) {
      this.grade = grade;
    },
  
    editAddress(address) {
      this.address = address;
    },
  
    printAll() {
      console.log(`이름: ${this.name}`);
      console.log(`나이: ${this.age}`);
      console.log(`학번: ${this.stdNum}`);
      console.log(`취미: ${this.hobby}`);
      console.log(`성적: ${this.grade}`);
      console.log(`주소: ${this.address}`);
    }
  };
  
module.exports = Person;