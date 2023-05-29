function makeSum(a) {
    return function(b) {
      return a+b
    };
  }
  
let counter = makeSum(2);
 
  
console.log(counter(2))
 
 
  