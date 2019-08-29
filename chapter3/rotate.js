//positive offSet only
function rotate(arr, offSet) {
  //this will allow the shift count to be as few as possible
  offSet = offSet % arr.length;

  while (offSet) {
    let temp = offSet > 0 ? arr[arr.length - 1] : arr[0];

    if(offSet > 0) {
      //shift right
      for (let i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
          arr[0] = temp;
          break;
        }
        arr[i] = arr[i - 1];
      }
    } else {
      //shift left
      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == arr[arr.length - 1]) {
          arr[arr.length - 1] = temp;
          break;
        }
        arr[i] = arr[i + 1];
      }
    }
    
    offSet = offSet > 0 ? offSet -= 1 : offSet += 1;
  }

  return arr;

};
console.log(rotate([1, 2, 3], 10));
console.log(rotate([1,2,3,4,5,6,7,8,9,10], 10));




module.exports = {
  rotate
}