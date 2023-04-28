function solution(my_string){
    let array1 = my_string.split("");
    let array2 = array1.reverse();
    let array = "";
    array2.forEach(function(item){
     array += item;
    })
    return array;
  }