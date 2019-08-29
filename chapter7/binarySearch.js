
//given [1,2,3,4,5], 3 => true;
//given [1,2,2,4,5,5] => false;
//given [1,2,4,5,6] => false;
//given [1,2,3,3,4,5,6] => true;

//Check if the value at the index where the given number should be is === number. => return true;
  //if the value larger than given number => false;
  //if the value is smaller than we can loop from there until we either find the number or a bigger one. 

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let midPoint = Math.floor((start + end) / 2);

    if(arr[midPoint] === num) {
      return true;
    }
    if(arr[midPoint] < num) {
      start = midPoint + 1;
    } else {
      end = midPoint - 1;
    };
  }

  return false;
};

console.log(binarySearch([1,2,3,4,5], 2)); // => true
console.log(binarySearch([1,2,2,4,5,5], 3)); // => false
console.log(binarySearch([1,2,4,5,6], 3)); // => false
console.log(binarySearch([1,1,1,2,3,3,4,5,6], 3)); // => true
