function reverseArray(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr
};

console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray([0, 1, 2, 3, 4]))

module.exports = {
  reverseArray
}