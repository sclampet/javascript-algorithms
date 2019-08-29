var testArray = [1,2,3,4]
var testOddArray = ["bob", 2, true, "", 5]

function swapPairs(arr) {
  for(var i = 0; i < arr.length - 1; i += 2) {
    if(arr[i + 1] !== null) {
      var temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp;
    } else {
      return arr
    }
  }

  return arr
}

// console.log(swapPairs(testArray))
console.log(swapPairs(testOddArray))

module.exports = {
  swapPairs
}