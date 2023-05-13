import {editPropertyName,printAll} from './property';

const Person = {
    name: "홍서영",
    age:22,
    stdNum:202112610,
    hobby: "영화보기",
    grade:3,
    residence:"수원",

    initialize(name, age, stdNum, hobby, grade, residence){    //각 속성값 초기화
        this.name=name;
        this.age=age;
        this.stdNum=stdNum;
        this.hobby=hobby;
        this.grade=grade;
        this.residence=residence;
    },

}
Person.editPropertyName("age",20);
Person.printAll();
