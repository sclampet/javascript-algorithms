//First: Given an unsorted array of numbers return the lowest *******************
/* 
  Space Complexity:
  Time Complexity: O(n) - We only need to check the ints in the array once
  Readability: 1 var, 1 for-loop, 1 array should be simple enough

  ?'s:
    - Can we assume the array only has numbers in it?
    - Can we assume that we'll only every be giving this function an array?
    - Should we return the minimum in any particular format?
  
  Pesudo Code:
    1. Store a var min to reference against the values of the array.
    2. If any other value in the array is lower that the current min, update min with the new value.
    3. Return min
*/

//Second: Given the same array return the 2nd lowest *******************
/*
  Space Complexity:
  Time Complexity: O(n)
  Readability: 2 variables, 1 for-loop, 1 return value

  ?'s:
    -
  
  Pesudo Code:
  1. Store a min and min2 to ref. against all values in the given array.
  2. Add a conditional check to see if the current value is lower that min.
  3. Switch min2 with min and min for new value if it is in fact lower.
  4. Add second coditional to check to see if the current value is less that min2, if it wasn't less than min, and switch accordingly
  5. return min2

*/

//Third: If given n return the nth lowest value from an unsorted array 
//Do this While maintaing a 0(n) time complexity *******************

/*
  Space Complexity:
  Time Complexity: 

  ?'s:
    - Can we assume all numbers are unique ? If not should I return how many values there are at the given minimum ?

  Pesudo Code:
  1. 

*/


//**************************************************************************

// function getMins1(arr) {
//   let min = arr[0];

//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//       min = arr[i];
//     };
//   };
//   return min;
// };

// function getMins2(arr) {
//   let min = arr[0];
//   let min2 = arr[1];

//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//       min2 = min;
//       min = arr[i];
//     } else if(arr[i] < min2) {
//       min2 = arr[i];
//     };
//   };

//   return min2;
// };

// [1,2,4,8,11,27]
function getMins3(arr) {
  
};

// console.log(getMins1([10, 6, 5, 3, 2, 8, 9]));
// console.log(getMins2([10, 6, 5, 3, 2, 8, 9]));

module.exports = {
  getMins1,
  getMins2
};


