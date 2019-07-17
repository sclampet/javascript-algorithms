function rockTheDojoSweatshirt(numSweatshirts) {
  var sweatShirtCost = numSweatshirts * 20;

  if(numSweatshirts == 2) {
    sweatShirtCost -= sweatShirtCost * 0.09;
  }
  if (numSweatshirts == 3) {
    sweatShirtCost -= sweatShirtCost * 0.19;
  }
  if (numSweatshirts >= 4) {
    sweatShirtCost -= sweatShirtCost * 0.35;
  }

  return Math.round(sweatShirtCost)
};

console.log(rockTheDojoSweatshirt(2))

module.exports = {
  rockTheDojoSweatshirt
}