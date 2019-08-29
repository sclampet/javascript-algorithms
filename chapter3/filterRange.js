function shiftArr(arr, index) {
  for(let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr
}
// console.log(shiftArr([1,2,3,4,5,6,7], 3))

function filterRange(arr, min, max) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] >= min && arr[i] <= max) {
      arr = shiftArr(arr, i);
      i -= 1;
    }
  }
  return arr;
};

console.log(filterRange([1,12,3,24,5,27,-8,19,10], 24, 27));

module.exports = {
  filterRange,
  shiftArr
}