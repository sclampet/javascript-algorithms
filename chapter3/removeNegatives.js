
function removeNegatives(arr) {
  let positives = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      arr[positives++] = arr[i]
      console.log("arr: " + arr)
    }
  }
  arr.length = positives;
  return arr;
};

console.log(removeNegatives([-3,5,-2,2,10]))

module.exports = {
  removeNegatives
}