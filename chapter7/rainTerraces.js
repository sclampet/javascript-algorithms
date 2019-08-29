// Given an array of terrace heights, return the maximum amount of water that is trapped when rains come.
// Given [3,1,1,4,2] => 2


function rainTerraces(arr) {
  let leftBarrier = 0;
  let maxWater = 0;

  for(let i = leftBarrier + 1; i < arr.length; i++) {
    //if value immediately after leftbarrier is >= leftbarrier then update leftbarrier to new value
    if(arr[leftBarrier + 1] >= arr[leftBarrier]) {
      leftBarrier = i;
      continue;
    }
    //define right barrier and loop between
    if(i - leftBarrier > 1 && arr[i] > arr[i - 1]) {
      console.log(`Left Barrier: ${arr[leftBarrier]} Right Barrier: ${arr[i]}`);
      for(let j = leftBarrier + 1; j < i; j++) {
        maxWater += arr[leftBarrier] - arr[j];
      };
      leftBarrier = i;
    };
  };
  return maxWater;
};

console.log(rainTerraces([3,1,2,1,2,2,0,2]));