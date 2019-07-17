

function extractOMatic(num, digitNum) {
  var extracted = 0;

  while (digitNum >= 0) {
    extracted = num % 10;
    num = Math.floor(num / 10);
    digitNum--;
  }

  return extracted;

};

//refactored without handling negative numbers
function extractOMatic2(num, digitNum) {
  var numToString = num.toString();

  return digitNum > numToString.length - 1
    ? 0 
    : Number(numToString[numToString.length - 1 - digitNum])
}



// console.log(extractOMatic(1824, 3))
console.log(extractOMatic2(1824, 0))

module.exports = {
  extractOMatic,
  extractOMatic2
}