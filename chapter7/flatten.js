
function flatten(arr) {
  let flattenedArr = [];
  for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        for(let j = 0; j < arr[i].length; j++) {
          flattenedArr.push(arr[i][j])
        };
      } else {
        flattenedArr.push(arr[i])
      }
  }
  return flattenedArr;
};

function flattenInPlace(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for(let j = 0; j < arr[i].length; j++) {
        arr.push(arr[i][j]);
      }
      arr.splice(i, 1);
    };
  };

  return arr;
};

// console.log(flatten([1,[2,3],4,[]])); // => [1,2,3,4]
console.log(flattenInPlace([1,[2,[2,3]],4,[]])); // => [1,2,3,4]