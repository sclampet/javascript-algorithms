
//When given a number, return the product of all positive integers from 1 up to number.

function factorial(num) {
  var sum = 1;

  while(num) {
    sum *= num;
    num--;
  }

  return sum;
}

//Refactored
//I beleive both of these solutions are equal in effiencency, but going with the for loop version may be better
//because it is more readable and will dictate a clear start and end point for other developers that may need this
function factorial2(num) {
  var sum = 1;

  for(var i = 1; i <= num; i++) {
    sum = sum *= i;
  }

  return sum;
}

console.log(factorial(5))
// console.log(factorial2(5))

module.exports = {
  factorial,
  factorial2
}