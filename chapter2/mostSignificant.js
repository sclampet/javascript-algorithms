function mostSignificant(num) {

  while(num) {
    console.log("num: "+num)
    if (num < 1 && num > 0) {
      num *= 10
      if (num >= 1) {
        return Math.floor(num)
      }
    } else {
      if (num % 10 == num) { // checks that num is in the single digits
        return num
      }
      num = Math.floor(num / 10);
    }
  }
  return num
}

console.log(mostSignificant(987))

module.exports = {
  mostSignificant
}