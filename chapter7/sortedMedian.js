// Given two arrays that are sorted but not necessarily the same length, find the median value.
// If the number of values is even, return the average of the two middle values

// Given ([1,5,9], [1,2,3,4,5,6]) , return 4 
// Given ([1,5,9], [1,2,3,4,5]) , return 3.5

function medianSortedArrays(arr1, arr2) {
  let totalLength = arr1.length + arr2.length;
  let medianIdx = totalLength % 2 !== 0 ? Math.floor(totalLength / 2) : totalLength / 2;
  let leftPointer = 0;
  let rightPointer = 0;
  let currVal = 0;
  let previousVal = 0;

  while(leftPointer + rightPointer <= medianIdx) {
    if(arr1[leftPointer] <= arr2[rightPointer]) {
      currVal = arr1[leftPointer];
      previousVal = arr1[leftPointer - 1];
      leftPointer++;
    } else {
      currVal = arr2[rightPointer];
      previousVal = arr2[rightPointer - 1];
      rightPointer++;
    };

  }
  
  return totalLength % 2 === 0 ? (currVal + previousVal) / 2 : currVal;

};

const arr1 = [1,5,9];
const arr2 = [1,2,3,4,5,6];


console.log(medianSortedArrays(arr1, arr2));

// medianSortedArrays2(...args)
  // [0,1,0,0,0] pointers for each array given