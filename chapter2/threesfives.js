

function threesfives() {
  var sum = 0;

  for(var i = 100; i <= 4000000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        continue;
    } else {
      if(i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  }

  return sum;
}

funtion betterThreesFives(start, end) {
  var sum = 0;

  for (var i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      continue;
    } else {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  }

  return sum;
}

threesfives()

module.exports = {
  threesfives
}