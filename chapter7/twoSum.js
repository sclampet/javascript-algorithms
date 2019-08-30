

const arr1 = [1,3,6,7,7,12,14]; // sum: 20 => true  |   sum: 32 => false

//brute force
// function twoSum(arr, sum) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === sum) {
//         return true;
//       };
//     };
//   };

//   return false;
// };

function twoSum2(arr, sum) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while(leftPointer < rightPointer) {
    if(arr[leftPointer] + arr[rightPointer] === sum) {
      return true;
    };

    if(sum > arr[leftPointer] + arr[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    };
  };
  return false;
}

console.log(twoSum2(arr1, 20));
console.log(twoSum2(arr1, 32));