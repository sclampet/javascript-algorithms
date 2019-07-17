function isPrime(num) {
  for(var i = 2; i < num / 2; i++) {
    if(num % i === 0) {
      return false;
    };
  };
  return num > 1
};



console.log(isPrime(11))

module.exports = {
  isPrime
}