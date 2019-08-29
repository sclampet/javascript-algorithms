

function removeDups(arr) {
  let buffer = {};

  for(let i = 0; i < arr.length; i++) {

    if (buffer[arr[i]] === false) {
      buffer[arr[i]] === undefined;
      arr.splice(i, 1);
      i--;
    } 
    else if (!buffer[arr[i]]) {
      buffer[arr[i]] = false;
    }
     
  };
  console.log(buffer)
  return arr;
};

console.log(removeDups([1,2,1,3,4,2]));


module.exports = {
  removeDups
}