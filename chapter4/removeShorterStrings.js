// Given a string array and value (length), remove any strings shorter than length from the array.
//["hello", "as", "name", "something", "Scott"], 5 -> ["hello", "something", "Scott"]

//Solution 1: Find string with length < given length, Shift all values to the right over to the left, cut off lenght of array by 1
//Solution 2: Push all strings with lengths >= given length to a new array, return array


function removeStringsShorterThan(arr, len) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= len) {
      newArr.push(arr[i]);
    };
  };

  return newArr;
};

console.log(removeStringsShorterThan(["hello", "as", "name", "something", "Scott"], 5))

module.exports = {
  removeStringsShorterThan
};