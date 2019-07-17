function sumToOne(num) {
 var sum = 0;

 while(num) {
   sum += num % 10
   num = Math.floor(num / 10)

   if(!num && sum > 9) {
      num = sum;
      sum = 0;
   }
 }
return sum;
};

console.log(sumToOne(928))

module.exports = {
  sumToOne
};