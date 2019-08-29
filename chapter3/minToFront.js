function minToFront(arr) {
  var min = arr[0];
  var minIdx = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    };
  };

  for (var i = minIdx; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = min;
  return arr;

};

//refactored to only use one loop
function minToFront2(arr) {
  let min = arr[0]
  let end = arr[arr.length - 1]

  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] < min) {
      min = arr[i]
    }
    arr[i] = arr[i - 1]
  }
  if(end != min) {
    arr[arr.length - 1] = end
  }
  arr[0] = min;
  return arr

};

var testArray = [4, 3, 1, 2];

console.log(minToFront(testArray));

module.exports = { 
  minToFront,
  minToFront2
}