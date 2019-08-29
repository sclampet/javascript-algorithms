// [1,3,6,17,18]  [1,6,17,18] => 3

//store dictionary ref
//set dict keys equal to first array's values
//As we loop through 2nd array, if value is in dict already set its value otherwise we'll keep it as null.
//Return all values with null. These will represent all of the missing values. 

//?'s
  //Can we assume only 1 value is missing at a time?
  //Do we know the one of the arrays contains missing values and does matter which argument they are?
  //Would like me to return the missing values in any particular format?


function findMissing(arr1, arr2) {
  let arr1Sum = 0;
  let arr2Sum = 0;

  for(let val of arr2) {
    arr2Sum += val;
  };

  for(let val of arr1) {
    arr1Sum += val;
  };

  return arr2Sum - arr1Sum;
};

console.log(findMissing([1,6,17,18], [1,3,6,17,18]));

