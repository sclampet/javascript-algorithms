function creditCardVal(arr) {
  const lastNumber = arr[arr.length - 1];
  let sum = 0;
  arr.length = arr.length - 1;

  for(let i = arr.length - 1; i >= 0; i--) {
    if(i % 2 != 0) {
      arr[i] *= 2;
    }

    if(arr[i] > 9) {
      arr[i] -= 9
    }
    
    sum += arr[i];
  }
  sum += lastNumber;
  return sum % 10 === 0;

};

console.log(creditCardVal([5,2,2,8,2]));

module.exports = {
  creditCardVal
};