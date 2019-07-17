function fibonacci(idx) {
  var fibArray = [0, 1]
  if(idx < 2) {
    return idx
  } 
    for(var i = 2; i <= idx; i++) {
      fibArray.push(fibArray[i - 2] + fibArray[i - 1])
      // console.log(fibArray)
    }

  return fibArray[idx];
};

//this will continure to call itself until it reaches the base case on here line:16
//at which point it will begin summing up each "branch" return value which will either be
//a 0 or a 1. In the case of recursiveFib(5) there will essentially be 5 1s that are returned
function recursiveFib(idx) {
  if(idx < 2) {
    return idx;
  }
  return recursiveFib(idx - 1) + recursiveFib(idx - 2);
}

// console.log(fibonacci(3))
console.log(recursiveFib(15))

module.exports = {
  fibonacci,
  recursiveFib
};