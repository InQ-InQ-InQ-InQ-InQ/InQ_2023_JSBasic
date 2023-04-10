function solution(my_string){
    const array1 = my_string.split();
    const array2 = array1.reverse();
    const array = [];
    array2.forEach(function(item){
      array.push(item);
    })
    return array;
  }