

function minSortedRotated(arr) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    if(arr[midPoint + 1] > arr[midPoint] && arr[midPoint - 1] > arr[midPoint]) {
      return arr[midPoint];
    };
    if(arr[midPoint + 1] < arr[midPoint]) {
      return arr[midPoint + 1];
    };

    if(end > arr[midPoint]) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    };
  };
};

//length = 7, lastValue = 3
console.log(minSortedRotated([4,5,6,7,8,1,2,3])) // => 1
console.log(minSortedRotated([8,2,3,4,5,6,7])) // => 2
console.log(minSortedRotated([20,22,23,24,25,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])) // => 4
