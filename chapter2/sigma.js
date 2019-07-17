//When given a positive number return the sum of all numbers up to that number. (inclusive)

//0.85s to complete
function sigma(num) {
  var sum = 0;

  while (num) {
    sum += num;
    num--
  }
  return sum;
}

//Refactor
//0.8s to complete
function sigma2(num) {
  var sum = 0
  for(var i = 0; i <= num; i++) {
    sum = sum += i
    // console.log("sum: "+sum+"idx: "+i)
  }

  return sum
}

// console.log(sigma(5))
console.log(sigma2(3))

module.exports = {
  sigma,
  sigma2
}