function skyline(arr) {
  let highestBuilding = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] <= 0 || arr[i - 1] >= arr[i] || arr[i] <= highestBuilding) {
      arr.splice(i, 1);
    }
    else if (arr[i] > highestBuilding) {
      highestBuilding = arr[i];
    } 
  }

  return arr;
};

console.log(skyline([-1, 1, 1, 7, 3]));
console.log(skyline([0, 4, 4, 3, 6, 8, -3]))

module.exports = {
  skyline
}
