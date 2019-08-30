// Create a function that returns the highest sum possible from these subarrays. 
// Given [1,2,-4,3,-2,3,-1] , you should return 4 (for subarray [3,-2,3] ), 
// and given [-1,-2,-4,-3,-2,-3] , return 0 (for [] ).

function maxSubArrSum(arr) {
  let maxSum = 0;
  let currentSubSum = 0;

  for(let item of arr) {
    // console.log(`maxSum: ${maxSum} currentSubSum: ${currentSubSum}`);
    currentSubSum += item;
    if(currentSubSum > maxSum) {
      maxSum = currentSubSum;
    };
    if(currentSubSum < 0) {
      currentSubSum = 0;
    };
  };

  return maxSum
};

const arr1 = [1,2,-4,3,-2,3,-1];
const arr2 = [-1,-2,-4,-3,-2,-3];
const arr3 = [1,2,-4,3,2,3];

console.log(maxSubArrSum(arr1));
console.log(maxSubArrSum(arr2));
console.log(maxSubArrSum(arr3));