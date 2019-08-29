// Write a function that returns whether the given array has a balance point between indices, 
// where one side’s sum is equal to the other’s. 
// Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false.



function balancePoint(arr) {
    let leftSum = arr[0];
    let rightSum = 0;
    var idx = 1;

    for(let i = 1; i < arr.length; i++) {
      rightSum += arr[i];
    };

    while(idx) {
      if(leftSum === rightSum) {
        console.log(`Balance point at index: ${idx} | leftSum: ${leftSum} | rightSum: ${rightSum}`);
        return true;
      };

      if(rightSum < leftSum) {
        return false;
      };

      leftSum += arr[idx];
      rightSum -= arr[idx];
      idx++;
    };

    return false;
};

let arr1 = [1,2,3,4,10];
let arr2 = [1,2,4,2,1];

console.log(balancePoint(arr1));
console.log(balancePoint(arr2));