
const arr1 = [1,2,3,9];
const arr2 = [1,2,3,4,4];

function findPairFromSum(arr, sum) {
  let low = 0;
  let high = arr.length - 1;
  
  while(low <= high) {
    if(arr[low] + arr[high] === sum) {
      return true;
    }

    if(arr[low] + arr[high] < sum) {
      low += 1;
    } 
    else if(arr[low] + arr[high] > sum) {
      high -= 1;
    };
  }

  return false;
}

console.log(findPairFromSum(arr1, 8));
console.log(findPairFromSum(arr2, 8));