export function editPropertyName(propertyName, value){    //속성값 변경
    this[propertyName]=value;
    
}

export function printAll(){    //속성값 출력
    console.log(Person);
}