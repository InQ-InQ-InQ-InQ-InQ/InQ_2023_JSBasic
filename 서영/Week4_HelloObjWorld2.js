import {editPropertyName,printAll} from './property';

class Person{
    constructor(name, age, stdNum, hobby, grade, residence){
        this.name=name;
        this.age=age;
        this.stdNum=stdNum;
        this.hobby=hobby;
        this.grade=grade;
        this.residence=residence;
    }
}
const me=new Person("홍서영",22,202112610,"영화보기",3,"수원");
me.editPropertyName("age",20);
me.printAll();