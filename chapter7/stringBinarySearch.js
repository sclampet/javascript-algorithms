
function stringBinarySearch(str, char) {
  let start = 0;
  let end = str.length - 1;
  let charToFindCode = char.charCodeAt(0);

  while(start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    let midPointCode = str.charCodeAt(midPoint);

    if(midPointCode === charToFindCode) {
      return true;
    }

    if(midPointCode > charToFindCode) {
      end = midPoint - 1;
    } else if(midPointCode < charToFindCode) {
      start = midPoint + 1;
    };
  };

  return false;
};

// console.log(stringBinarySearch(" &-0379DEFXZ[abcz|", "6"));
// console.log(stringBinarySearch(" &-0379DEFXZ[abcz|", "c"));

module.exports = {
  stringBinarySearch,
};