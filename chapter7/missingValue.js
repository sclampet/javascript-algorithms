// You are given an array of length N that contains, in no particular order, integers from 0 to N . 
// One integer value is missing. Quickly determine and return the missing value. Given ([3,0,1]) , return 2 .

// Second: now the lowest value can now be any integer (including negatives), instead of always being 0 . 
// Given ([2,-4,0,-3,-2,1]) return -1 . Given ([5,2,7,8,4,9,3]) , return 6 .



// The range of numbers that should be in the array. 0 -> N(length) => Length: 5 Numbers in array should 012345

//Can we assume all values are unique in given array? Can we potentially expect any negative numbers?

// Build a reference, Set, of our range. [0,1,2,3,4,5];
// as we find values given array we can use .has to check our set and then remove if true.
// reutrn what's left of our set. 

// Time: O(n*2) -> building the set and then looping through given arr again.

function getMinMaxSum(arr) {
  let min = 0;
  let max = 0;
  let sum = 0;

  for(num of arr) {
    if(num < min) {
      min = num;
    };

    if(num > max) {
      max = num;
    };

    sum += num;
  };
  return [min, max, sum];
}

function missingValue(arr) {
  let sumShouldBe = 0;
  let minMaxSum = getMinMaxSum(arr);

  for(let i = minMaxSum[0]; i <= minMaxSum[1]; i++) {
    sumShouldBe += i;
  }

  return sumShouldBe - minMaxSum[2];
};

console.log(missingValue([3,0,1,4]));
console.log(missingValue([2,-4,0,-3,-2,1]))

module.exports = {
  missingValue
}